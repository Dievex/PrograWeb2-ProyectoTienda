<script lang="ts">
  import { auth } from '../stores/auth.svelte';
  import { User, Mail, Shield } from 'lucide-svelte';
</script>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6 flex items-center">
      <div class="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4">
        <User size={32} />
      </div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Perfil de Usuario
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          Detalles personales y configuración.
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500 flex items-center">
            <User class="w-4 h-4 mr-2" /> Nombre de usuario
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {auth.user?.username}
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500 flex items-center">
            <Shield class="w-4 h-4 mr-2" /> Rol
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full {auth.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}">
              {auth.user?.role || 'usuario'}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
