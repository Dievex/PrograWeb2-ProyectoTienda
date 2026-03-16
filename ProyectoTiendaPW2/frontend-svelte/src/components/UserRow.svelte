<script lang="ts">
  import { Shield, User, Trash2 } from 'lucide-svelte';

  let { 
    user, 
    onToggleRole, 
    onDelete 
  }: { 
    user: any; 
    onToggleRole: (user: any) => void; 
    onDelete: (id: string) => void;
  } = $props();
</script>

<li>
  <div class="px-4 py-4 flex items-center sm:px-6">
    <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          {#if user.role === 'admin'}
            <Shield class="h-10 w-10 text-purple-500 bg-purple-100 rounded-full p-2" />
          {:else}
            <User class="h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2" />
          {/if}
        </div>
        <div class="ml-4">
          <p class="font-medium text-primary-600 truncate">{user.username}</p>
          <p class="mt-1 flex items-center text-sm text-gray-500">
            <span class="truncate">Rol: {user.role}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="ml-5 flex-shrink-0 flex space-x-2">
      <button
        onclick={() => onToggleRole(user)}
        class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50"
      >
        Cambiar Rol
      </button>
      <button
        onclick={() => onDelete(user._id)}
        class="p-2 border border-transparent rounded-md text-red-600 hover:bg-red-50"
        title="Eliminar"
      >
        <Trash2 class="w-5 h-5" />
      </button>
    </div>
  </div>
</li>
