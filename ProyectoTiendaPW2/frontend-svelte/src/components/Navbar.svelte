<script lang="ts">
  import { auth } from '../stores/auth.svelte';
  import { router } from '../stores/router.svelte';
  import { cart } from '../stores/cart.svelte';
  import { LogOut, Monitor, User, Users, ShoppingBag, Menu, X } from 'lucide-svelte';
  import { slide } from 'svelte/transition';

  let isMobileMenuOpen = $state(false);

  function handleLogout() {
    auth.logout();
    router.navigate('/login');
    isMobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  let navItems = $derived.by(() => {
    let items = [
      { path: '/', label: 'Productos', icon: Monitor },
      { path: '/profile', label: 'Perfil', icon: User }
    ];
    
    if (auth.isAdmin) {
      items.push({ path: '/admin', label: 'Usuarios', icon: Users });
    }
    
    return items;
  });
</script>

{#if auth.isAuthenticated}
  <nav class="bg-primary-600 text-white shadow-md font-sans">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-8">
          <button class="flex-shrink-0 flex items-center font-bold text-sm sm:text-lg md:text-xl cursor-pointer hover:opacity-80 tracking-wide font-['Press_Start_2P']" onclick={() => router.navigate('/')}>
            <Monitor class="mr-2" /> PC Components
          </button>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              {#each navItems as item}
                {@const Icon = item.icon}
                <button 
                  onclick={() => router.navigate(item.path)}
                  class="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out uppercase tracking-wider {router.path === item.path ? 'bg-primary-800 text-white shadow-inner' : 'text-primary-100 hover:bg-primary-500 hover:text-white hover:shadow-sm'}"
                >
                  <Icon class="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              {/each}
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <span class="text-sm mr-4 text-primary-100 hidden xl:block">
            Hola, {auth.user?.username || 'Usuario'}
          </span>
          <button 
            onclick={() => cart.toggle()}
            class="relative p-2 mr-2 sm:mr-4 text-primary-100 hover:text-white transition-colors"
          >
            <ShoppingBag class="w-6 h-6" />
            {#if cart.totalItems > 0}
              <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                {cart.totalItems}
              </span>
            {/if}
          </button>
          
          <div class="hidden md:block">
            <button 
              onclick={handleLogout}
              class="flex items-center px-3 py-2 rounded-md text-sm font-medium text-primary-100 hover:bg-primary-500 hover:text-white transition-colors"
            >
              <LogOut class="w-4 h-4 mr-2" /> Salir
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button
              onclick={toggleMobileMenu}
              class="inline-flex items-center justify-center p-2 rounded-md text-primary-100 hover:text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span class="sr-only">Abrir menú principal</span>
              {#if isMobileMenuOpen}
                <X class="block h-6 w-6" />
              {:else}
                <Menu class="block h-6 w-6" />
              {/if}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if isMobileMenuOpen}
      <div class="md:hidden" id="mobile-menu" transition:slide={{ duration: 200 }}>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {#each navItems as item}
            {@const Icon = item.icon}
            <button
              onclick={() => { router.navigate(item.path); isMobileMenuOpen = false; }}
              class="flex w-full items-center px-3 py-2 rounded-md text-base font-medium {router.path === item.path ? 'bg-primary-800 text-white' : 'text-primary-100 hover:bg-primary-500 hover:text-white'}"
            >
              <Icon class="w-4 h-4 mr-2" />
              {item.label}
            </button>
          {/each}
          <div class="border-t border-primary-500 mt-2 pt-2">
            <button
              onclick={handleLogout}
              class="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-primary-100 hover:bg-primary-500 hover:text-white"
            >
              <LogOut class="w-4 h-4 mr-2" /> Salir
            </button>
          </div>
        </div>
      </div>
    {/if}
  </nav>
{/if}
