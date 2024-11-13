import app from "./app.js";
import connectDb from "./db.js";


connectDb();
const puerto = 4000;


app.listen(puerto);
console.log("SERVIDOR BACK EN PUERTO "+ puerto);