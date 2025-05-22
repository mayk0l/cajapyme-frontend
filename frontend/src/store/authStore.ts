import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  usuario: string | null;
  login: (usuario: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const USUARIO_DEMO = 'admin';
const PASSWORD_DEMO = '1234';

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      usuario: null,
      login: async (usuario, password) => {
        // Simulación de login
        if (usuario === USUARIO_DEMO && password === PASSWORD_DEMO) {
          set({ isAuthenticated: true, usuario });
          return true;
        } else {
          set({ isAuthenticated: false, usuario: null });
          return false;
        }
      },
      logout: () => set({ isAuthenticated: false, usuario: null }),
    }),
    { name: 'cajapyme-auth' }
  )
);

export default useAuthStore;
