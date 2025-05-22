// Mock API para movimientos de caja con persistencia en localStorage
import type { Movimiento } from '../store/useStore';

const STORAGE_KEY = 'cajapyme-movimientos-api';

function getMovimientosStorage(): Movimiento[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function setMovimientosStorage(movs: Movimiento[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(movs));
}

export async function obtenerMovimientos(): Promise<Movimiento[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMovimientosStorage());
    }, 300);
  });
}

export async function agregarMovimiento(mov: Movimiento): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movs = getMovimientosStorage();
      setMovimientosStorage([mov, ...movs]);
      resolve();
    }, 300);
  });
}

export async function editarMovimiento(id: string, cambios: Partial<Movimiento>): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movs = getMovimientosStorage();
      setMovimientosStorage(
        movs.map((m) => (m.id === id ? { ...m, ...cambios } : m))
      );
      resolve();
    }, 300);
  });
}

export async function eliminarMovimientoApi(id: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movs = getMovimientosStorage();
      setMovimientosStorage(movs.filter((m) => m.id !== id));
      resolve();
    }, 300);
  });
}
