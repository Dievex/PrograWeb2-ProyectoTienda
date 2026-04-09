import { apiFetch } from './client';

export const authApi = {
  async login(credentials: any) {
    return apiFetch('/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
  },

  async register(data: any) {
    return apiFetch('/register', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async getUsers() {
    return apiFetch('/users');
  },
  
  async deleteUser(id: string) {
    return apiFetch(`/users/${id}`, {
      method: 'DELETE'
    });
  },
  
  async updateUserRole(id: string, rol: string) {
    return apiFetch(`/users/${id}/role`, {
      method: 'PUT',
      body: JSON.stringify({ rol })
    });
  },

  async getProfile() {
    return apiFetch('/profile');
  },
  
  async updateProfile(data: any) {
    return apiFetch('/profile', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
};
