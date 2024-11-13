import Articulo from "../models/articulo_model.js";
import Pedido from "../models/pedido_model.js"

export const checkArticulo = async (req, res) => {

    const { nombre } = req.body;

    try {
        if (await Articulo.findOne({ nombre: nombre })) {
            res.send("Existe")
        } else {
            console.log("No existe")
            res.send("No existe")
        }
    } catch (error) {
        console.log(error)
    }
}


export const historialAlumno = async (req, res) => {

    const { nombreAlumno } = req.body;

    try {
        const historialAlumno = await Pedido.find({ nombreAlumno: nombreAlumno });
        res.send(historialAlumno)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


export const crearPedido = async (req, res) => {

    const { nombreAlumno, nombreArticulo, numeroArticulos, horaRecogida } = req.body;

    try {
        const pedido = new Pedido({
            nombreAlumno: nombreAlumno,
            nombreArticulo: nombreArticulo,
            numeroArticulos: numeroArticulos,
            horaRecogida: horaRecogida
        })

        console.log("El pedido -> " + pedido)
        await pedido.save();
        res.send(pedido)
    } catch (error) {

        res.send(error)
    }

}

export const crearArticulo = async (req, res) => {

    const { nombreArt, disponibilidadArt, precioArt } = req.body;

    try {
        const art = new Articulo({
            nombreArt: nombreArt,
            disponibilidadArt: disponibilidadArt,
            precioArt: precioArt
        })
        await art.save();
        res.send(art)
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}