export function createAuthStore() {
  let token = $state<string | null>(localStorage.getItem('token'));
  
  function decodeToken(t: string | null) {
    if (!t) return null;
    try {
      const base64Url = t.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  }

  let user = $state<{ id: string, username: string, role: string } | null>(decodeToken(token));

  $effect.root(() => {
    $effect(() => {
      if (token) {
        localStorage.setItem('token', token);
        user = decodeToken(token);
      } else {
        localStorage.removeItem('token');
        user = null;
      }
    });
  });

  return {
    get token() { return token; },
    set token(value) { token = value; },
    get user() { return user; },
    get isAuthenticated() { return !!token && !!user; },
    get isAdmin() { return user?.role === 'admin'; },
    logout() {
      token = null;
    }
  };
}

export const auth = createAuthStore();
