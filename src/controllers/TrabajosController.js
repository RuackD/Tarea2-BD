import prisma from '../prismaClient.js'
            
const createTrabajos = async (req, res) => {
    try{
        const{ descripcion, sueldo} = req.body
        const trabajos = await prisma.trabajos.create({ 
            data: {
                descripcion,
                sueldo
            } 
        })
        return res.status(200).json(trabajos, {message: 'Trabajo creado con exito'});
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error creando el trabajo, verifique los datos'})
    }
  };

const getAllTrabajos = async (req, res) => {
    try{
        const trabajos = await prisma.trabajos.findMany()
        return res.status(200).json({trabajos, message: 'Trabajo creados con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error obteniendo los trabajos'})
    }
    };
  
const getTrabajosById = async (req, res) => {
    try{
        const{ id } = req.params
        const trabajos = await prisma.trabajos.findUnique({
            where: { 
                id: Number(id) 
            } 
        })
        if(!trabajos){
            return res.status(404).json({error: "No existe un trabajo con esa id"})
        }
        return res.status(200).json({trabajos, message: 'Trabajo retornado con exito'});
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error obteniendo el trabajo, verifique los datos'})
    }
    };

const updateTrabajos = async (req, res) => {
    try{
        const { id } = req.params
        const{ descripcion, sueldo} = req.body
        const trabajos = await prisma.trabajos.update({ 
            where: { 
                id: Number(id) 
            }, 
            data: {
                descripcion: descripcion || trabajos.descripcion,
                sueldo: sueldo || trabajos.sueldo
            } 
        })
        if(!trabajos){
            return res.status(404).json({error: 'No existe un trabajo con esa id'})
        }
        return res.status(200).json({trabajos, message: 'Trabajo actualizado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error actualizando el trabajo, verifique los datos'})
    }
    };
    
const deleteTrabajos = async (req, res) => {
    try{
        const { id } = req.params
        const trabajos = await prisma.trabajos.delete({ 
            where: { 
                id: Number(id)
            } 
        })
        if(!trabajos){
            return res.status(404).json({error: 'No existe un trabajo con esa id' })
        }
        return res.status(200).json({message: 'Trabajo eliminado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error eliminando el trabajo, verifique los datos'})
    }
    };
      
export default TrabajosController

const TrabajosController = {
    createTrabajos,
    getAllTrabajos,
    getTrabajosById, 
    updateTrabajos,
    deleteTrabajos
};