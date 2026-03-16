<script lang="ts">
  import { toasts } from '../stores/toasts.svelte';
  import { X, CheckCircle, AlertCircle, Info } from 'lucide-svelte';

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info
  };

  const colors = {
    success: 'bg-green-100 text-green-800 border-green-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    info: 'bg-blue-100 text-blue-800 border-blue-300'
  };
</script>

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
  {#each toasts.toasts as toast (toast.id)}
    {@const Icon = icons[toast.type]}
    <div class="flex items-center p-4 border rounded-lg shadow-lg {colors[toast.type]} min-w-[300px] animate-fade-in">
      <Icon class="w-5 h-5 mr-3 flex-shrink-0" />
      <p class="flex-grow text-sm font-medium">{toast.message}</p>
      <button 
        onclick={() => toasts.remove(toast.id)}
        class="ml-3 hover:opacity-75"
      >
        <X class="w-4 h-4" />
      </button>
    </div>
  {/each}
</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out;
  }
</style>
