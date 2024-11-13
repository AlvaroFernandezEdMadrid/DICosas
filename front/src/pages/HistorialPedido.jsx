import React from "react";
import { useForm } from "react-hook-form";
import { HistorialPedidosRequest } from "../../api/connectBack";

function HistorialPedido() {
  const { register, handleSubmit } = useForm();
  return (
    <div class="bg-gray-100 flex justify-center items-center h-screen">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 class="text-2xl font-bold text-center text-gray-700 mb-6">
          Historial Pedidos del Alumno
        </h1>

        <form
          onSubmit={handleSubmit(async (values) => {
            HistorialPedidosRequest(values);
          })}
        >
          <div class="mb-4">
            <label
              htmlFor="nombreAlumno"
              class="block text-sm font-medium text-gray-600"
            >
              Nombre del Alumno
            </label>
            <input
              {...register("nombreAlumno", { required: true })}
              type="text"
              id="nombreAlumno"
              class="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Ingresa el nombre del alumno"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default HistorialPedido;
