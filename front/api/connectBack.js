import axios from 'axios'

const API = 'http://localhost:4000';

export const ComprobarArticulosRequest = (articulo) => {
    axios.post(`${API}/checkArticulo`, articulo)
        .then(
            function (response) {
                console.log(response)
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
}

export const CrearPedidoRequest = (pedido) => {

    axios.post(`${API}/crearPedido`, pedido)
        .then(
            function (response) {
                console.log(response)
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
}

export const CrearArticuloRequest = (articulo) => {
    axios.post(`${API}/crearArticulo`, articulo)
        .then(
            function (response) {
                console.log(response)
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
}

export const HistorialPedidosRequest = (pedido) => {
    const pedidos = axios.post(`${API}/historialAlumno`, pedido)
        .then(
            function (response) {
                console.log(response)
            }

        ).catch(
            function (error) {
                console.log(error)
            }
        )
}
