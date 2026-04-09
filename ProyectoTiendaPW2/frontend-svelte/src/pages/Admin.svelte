<script lang="ts">
  import { onMount } from 'svelte';
  import { AuthService } from '../services/auth.service';
  import { toasts } from '../stores/toasts.svelte';
  import UserRow from '../components/UserRow.svelte';
  import { Loader2 } from 'lucide-svelte';

  let users = $state<any[]>([]);
  let loading = $state(true);

  async function loadUsers() {
    try {
      users = await AuthService.getUsers();
    } catch (err: any) {
      toasts.error(err.message || 'Error al cargar usuarios');
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadUsers();
  });

  async function toggleRole(user: any) {
    const newRole = user.role === 'admin' ? 'usuario' : 'admin';
    try {
      await AuthService.updateUserRole(user._id, newRole);
      users = users.map(u => u._id === user._id ? { ...u, role: newRole } : u);
      toasts.success('Rol actualizado');
    } catch (err: any) {
      toasts.error(err.message || 'Error al actualizar rol');
    }
  }

  async function deleteUser(id: string) {
    if (!confirm('¿Seguro que quieres eliminar este usuario?')) return;
    try {
      await AuthService.deleteUser(id);
      users = users.filter(u => u._id !== id);
      toasts.success('Usuario eliminado');
    } catch (err: any) {
      toasts.error(err.message || 'Error al eliminar usuario');
    }
  }
</script>

{#snippet loadingState()}
  <div class="bg-white shadow overflow-hidden sm:rounded-md animate-pulse">
    <ul class="divide-y divide-gray-200">
      {#each Array(5) as _}
        <li class="px-4 py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div class="ml-4 space-y-2">
                <div class="h-4 bg-gray-200 rounded w-32"></div>
                <div class="h-3 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
            <div class="flex space-x-2">
              <div class="h-8 w-24 bg-gray-200 rounded"></div>
              <div class="h-8 w-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/snippet}

{#snippet emptyState()}
  <li class="px-4 py-8 text-center sm:px-6">
    <p class="text-gray-500 text-lg">No hay usuarios registrados.</p>
  </li>
{/snippet}

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1>
    <p class="mt-2 text-sm text-gray-600">Administra los usuarios registrados en el sistema.</p>
  </div>

  {#if loading}
    {@render loadingState()}
  {:else}
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        {#each users as user (user._id)}
          <UserRow 
            {user} 
            onToggleRole={toggleRole} 
            onDelete={deleteUser} 
          />
        {:else}
          {@render emptyState()}
        {/each}
      </ul>
    </div>
  {/if}
</div>
