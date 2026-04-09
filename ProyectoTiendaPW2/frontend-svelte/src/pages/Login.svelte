<script lang="ts">
  import { auth } from '../stores/auth.svelte';
  import { router } from '../stores/router.svelte';
  import { AuthService } from '../services/auth.service';
  import { toasts } from '../stores/toasts.svelte';
  import { Monitor, Loader2 } from 'lucide-svelte';

  let username = $state('');
  let password = $state('');
  let loading = $state(false);

  async function handleLogin(e: Event) {
    e.preventDefault();
    if (!username || !password) {
      toasts.error('Por favor, completa todos los campos');
      return;
    }

    loading = true;
    try {
      await AuthService.login({ username, password });
      
      toasts.success('¡Bienvenido!');
      router.navigate('/');
    } catch (err: any) {
      toasts.error(err.message || 'Error al iniciar sesión');
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
        Inicia sesión
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        en tu tienda de componentes
      </p>
    </div>
    
  <form class="mt-8 space-y-6" onsubmit={handleLogin} autocomplete="on">
    <div class="rounded-md shadow-sm space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Usuario</label>
        <div class="relative">
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
            data-lpignore="true" 
          >
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <div class="relative">
          <input 
            id="password" 
            type="password" 
            name="password"
            autocomplete="current-password"
            required 
            bind:value={password}
            disabled={loading}
            class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" 
            placeholder="••••••••"
            data-lpignore="true" 
          >
        </div>
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
            Iniciando sesión...
          {:else}
            Ingresar
          {/if}
        </button>
      </div>
      <div class="text-center">
        <p class="text-sm text-gray-600">
          ¿No tienes cuenta? 
          <button 
            type="button"
            onclick={() => router.navigate('/register')}
            class="font-medium text-primary-600 hover:text-primary-500"
          >
            Regístrate aquí
          </button>
        </p>
      </div>
    </form>
  </div>
</div>
