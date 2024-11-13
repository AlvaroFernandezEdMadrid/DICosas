import React from "react";
import { useForm } from "react-hook-form";
import { CrearPedidoRequest } from "../../api/connectBack";

function CrearPedido() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Crear Pedido
        </h1>

        <form
          onSubmit={handleSubmit(async (values) => {
            CrearPedidoRequest(values);
          })}
        >
          <div className="mb-4">
            <label
              htmlFor="nombreAlumno"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre del Alumno
            </label>
            <input
              {...register("nombreAlumno", { required: true })}
              type="text"
              id="nombreAlumno"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Ingresa el nombre del alumno"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nombreArticulo"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre del Artículo
            </label>
            <input
              {...register("nombreArticulo", { required: true })}
              type="text"
              id="nombreArticulo"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Ingresa el nombre del artículo"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cantidad"
              className="block text-sm font-medium text-gray-600"
            >
              Cantidad
            </label>
            <input
              {...register("numeroArticulos", { required: true })}
              type="number"
              id="cantidad"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Ingresa la cantidad de artículos"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="hora"
              className="block text-sm font-medium text-gray-600"
            >
              Hora de Recogida
            </label>
            <input
              {...register("horaRecogida", { required: true })}
              type="time"
              id="hora"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Crear Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearPedido;
