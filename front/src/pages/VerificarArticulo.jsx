import React from "react";
import { useForm } from "react-hook-form";
import { ComprobarArticulosRequest } from "../../api/connectBack";

function VerificarArticulo() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Verificar Artículo
        </h1>

        <form
          onSubmit={handleSubmit(async (values) => {
            ComprobarArticulosRequest(values);
          })}
        >
          <div className="mb-4">
            <label
              htmlFor="nombreArticulo"
              className="block text-sm font-medium text-gray-600"
            >
              Nombre del Artículo
            </label>
            <input
              type="text"
              id="nombreArticulo"
              name="nombreArticulo"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Ingresa el nombre del artículo"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerificarArticulo;
