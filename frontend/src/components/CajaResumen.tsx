import { useCajaStore } from '../store/useStore';

export function CajaResumen() {
  const { saldo, ingresos, egresos, agregarIngreso, agregarEgreso, reset } = useCajaStore();

  return (
    <div className="p-4 border rounded shadow max-w-md">
      <h2 className="text-xl font-bold mb-2">Resumen Caja Diaria</h2>
      <p>Saldo: ${saldo.toFixed(2)}</p>
      <p>Ingresos: ${ingresos.toFixed(2)}</p>
      <p>Egresos: ${egresos.toFixed(2)}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => agregarIngreso(1000)}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          + Ingreso $1000
        </button>
        <button
          onClick={() => agregarEgreso(500)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          - Egreso $500
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
