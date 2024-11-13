import React from "react";
import { useForm } from "react-hook-form";
import { CrearArticuloRequest } from "../../api/connectBack.js";

function RegistroProducto() {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Registrar Producto
        </h2>

        <form
          onSubmit={handleSubmit(async (values) => {
            CrearArticuloRequest(values);
          })}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="nombreArt"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del Producto
            </label>
            <input
              {...register("nombreArt", { required: true })}
              type="text"
              id="nombreArt"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="precioArt"
              className="block text-sm font-medium text-gray-700"
            >
              Precio
            </label>
            <input
              {...register("precioArt", { required: true })}
              type="number"
              id="precioArt"
              step="0.01"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="disponibilidadArt"
              className="block text-sm font-medium text-gray-700"
            >
              Disponibilidad
            </label>
            <select
              {...register("disponibilidadArt", { required: true })}
              id="disponibilidadArt"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="true">Disponible</option>
              <option value="false">No disponible</option>
            </select>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Registrar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroProducto;
