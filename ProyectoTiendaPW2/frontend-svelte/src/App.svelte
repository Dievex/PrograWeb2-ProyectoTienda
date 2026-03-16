<script lang="ts">
  import { auth } from './stores/auth.svelte';
  import { router } from './stores/router.svelte';
  import Navbar from './components/Navbar.svelte';
  import Toasts from './components/Toasts.svelte';
  import Login from './pages/Login.svelte';
  import Register from './pages/Register.svelte';
  import Products from './pages/Products.svelte';
  import Profile from './pages/Profile.svelte';
  import Admin from './pages/Admin.svelte';
  import CartDrawer from './components/CartDrawer.svelte';

  // Derived state to determine which component to show
  let CurrentPage = $derived(() => {
    if (!auth.isAuthenticated) {
      if (router.path === '/register') return Register;
      return Login;
    }

    switch (router.path) {
      case '/':
      case '/products':
        return Products;
      case '/profile':
        return Profile;
      case '/admin':
        return auth.isAdmin ? Admin : Products;
      default:
        return Products;
    }
  });

  // Redirect effect
  $effect(() => {
    if (!auth.isAuthenticated && router.path !== '/login' && router.path !== '/register') {
      router.navigate('/login');
    } else if (auth.isAuthenticated && (router.path === '/login' || router.path === '/register')) {
      router.navigate('/');
    }
  });
</script>

<div class="min-h-screen flex flex-col bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
  <Navbar />
  
  <main class="flex-grow">
    {#if CurrentPage()}
      {@const Page = CurrentPage()}
      <Page />
    {/if}
  </main>

  <Toasts />
  <CartDrawer />
</div>
