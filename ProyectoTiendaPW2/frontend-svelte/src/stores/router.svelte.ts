export function createRouter() {
  let currentPath = $state(window.location.hash.slice(1) || '/');

  $effect.root(() => {
    window.addEventListener('hashchange', () => {
      currentPath = window.location.hash.slice(1) || '/';
    });
  });

  return {
    get path() { return currentPath; },
    navigate(path: string) {
      window.location.hash = path;
    }
  };
}

export const router = createRouter();
