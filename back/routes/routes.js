import Router from 'express'
import { checkArticulo, crearArticulo, crearPedido, historialAlumno } from '../controllers/cafe_controller.js';


const router = Router();



router.post('/checkArticulo',checkArticulo)
router.post('/historialAlumno',historialAlumno)
router.post('/crearPedido',crearPedido)
router.post('/crearArticulo', crearArticulo)



export default router