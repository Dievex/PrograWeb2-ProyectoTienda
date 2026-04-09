import { authApi } from '../api/auth.api';
import { auth } from '../stores/auth.svelte';

export const AuthService = {
  async login(credentials: any) {
    const data = await authApi.login(credentials);
    auth.token = data.token;
    return data;
  },

  async register(data: any) {
    return authApi.register(data);
  },

  async getUsers() {
    return authApi.getUsers();
  },

  async deleteUser(id: string) {
    return authApi.deleteUser(id);
  },
  
  async updateUserRole(id: string, rol: string) {
    return authApi.updateUserRole(id, rol);
  },

  async getProfile() {
    return authApi.getProfile();
  },

  async updateProfile(data: any) {
    return authApi.updateProfile(data);
  }
};
