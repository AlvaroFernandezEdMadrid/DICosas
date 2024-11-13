import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/BDDAM2");
        console.log("########## Conexion a BBDD (OK) ##########");
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;