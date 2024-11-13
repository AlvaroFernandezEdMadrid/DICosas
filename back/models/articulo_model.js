import mongoose from 'mongoose'


const articuloSchema = new mongoose.Schema({
        nombreArt:{
            type: String,
            trim: true,
        },
        disponibilidadArt:{
            type: Boolean,
            trim: true,
        },
        precioArt:{
            type: Number,
            trim: true,
        }

},{
    timestamps:true
})

export default mongoose.model('Articulo',articuloSchema);