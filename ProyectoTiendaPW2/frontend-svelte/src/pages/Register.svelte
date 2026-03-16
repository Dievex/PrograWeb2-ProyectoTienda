<script lang="ts">
  import { router } from '../stores/router.svelte';
  import { apiFetch } from '../services/api';
  import { toasts } from '../stores/toasts.svelte';
  import { Monitor, Loader2 } from 'lucide-svelte';

  let username = $state('');
  let password = $state('');
  let confirmPassword = $state('');
  let loading = $state(false);

  async function handleRegister(e: Event) {
    e.preventDefault();
    
    if (!username || !password || !confirmPassword) {
      toasts.error('Por favor, completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      toasts.error('Las contraseñas no coinciden');
      return;
    }

    loading = true;
    try {
      await apiFetch('/register', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      
      toasts.success('¡Registro exitoso! Por favor inicia sesión.');
      router.navigate('/login');
    } catch (err: any) {
      toasts.error(err.message || 'Error al registrar usuario');
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
    <div class="flex flex-col items-center">
      <div class="p-3 bg-primary-100 rounded-full text-primary-600 mb-4">
        <Monitor size={40} />
      </div>
      <h2 class="text-center text-3xl font-extrabold text-gray-900">
        Crear cuenta
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        únete a nuestra tienda de componentes
      </p>
    </div>
    
    <form class="mt-8 space-y-6" onsubmit={handleRegister} autocomplete="on">
      <div class="rounded-md shadow-sm space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Usuario</label>
          <input 
            id="username" 
            type="text" 
            name="username"
            autocomplete="username"
            required 
            bind:value={username}
            disabled={loading}
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" 
            placeholder="usuario123"
          >
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            autocomplete="new-password"
            required 
            bind:value={password}
            disabled={loading}
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" 
            placeholder="••••••••"
          >
        </div>
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
          <input 
            id="confirm-password" 
            type="password" 
            name="confirm-password"
            autocomplete="new-password"
            required 
            bind:value={confirmPassword}
            disabled={loading}
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" 
            placeholder="••••••••"
          >
        </div>
      </div>

      <div>
        <button 
          type="submit" 
          disabled={loading}
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 transition-colors"
        >
          {#if loading}
            <Loader2 class="animate-spin -ml-1 mr-2 h-5 w-5" />
            Registrando...
          {:else}
            Registrarse
          {/if}
        </button>
      </div>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          ¿Ya tienes cuenta? 
          <button 
            type="button"
            onclick={() => router.navigate('/login')}
            class="font-medium text-primary-600 hover:text-primary-500"
          >
            Inicia sesión aquí
          </button>
        </p>
      </div>
    </form>
  </div>
</div>
