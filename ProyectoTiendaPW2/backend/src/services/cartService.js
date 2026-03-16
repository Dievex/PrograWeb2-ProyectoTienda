const User = require('../models/User');
const Producto = require('../models/Producto');
const client = require('../config/redis'); // Import redis client

class CartService {
  async getCart(userId) {
    const user = await User.findById(userId).populate('cart.productId');
    return user.cart;
  }

  async addToCart(userId, productId) {
    const user = await User.findById(userId);
    const productIndex = user.cart.findIndex(item => item.productId.toString() === productId);

    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
    } else {
      user.cart.push({ productId, quantity: 1 });
    }

    await user.save();
    // Populate manually or re-fetch if needed, but here we return the cart
    // Note: In the original code it populated before returning.
    // We can do that here too.
    // However, populate on a document instance works differently than query.
    // Mongoose 6+ supports await user.populate(...)
    await user.populate('cart.productId');
    return user.cart;
  }

  async removeFromCart(userId, productId) {
    const user = await User.findById(userId);
    user.cart = user.cart.filter(item => item.productId.toString() !== productId);
    await user.save();
    await user.populate('cart.productId');
    return user.cart;
  }

  async checkout(userId) {
    const user = await User.findById(userId).populate('cart.productId');
    
    if (!user.cart || user.cart.length === 0) {
      throw new Error('El carrito está vacío');
    }

    // Check stock and reduce it
    for (const item of user.cart) {
      const product = await Producto.findById(item.productId._id);
      
      if (!product) {
        throw new Error(`El producto ${item.productId.nombre} ya no existe`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Stock insuficiente para ${product.nombre}. Disponible: ${product.stock}`);
      }

      product.stock -= item.quantity;
      await product.save();
    }

    // Invalidate products cache
    await client.del('lista_productos');

    // Clear user cart
    user.cart = [];
    await user.save();
    
    return { success: true };
  }
}

module.exports = new CartService();
