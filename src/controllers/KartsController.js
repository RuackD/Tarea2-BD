import prisma from '../prismaClient.js'
            
const createKarts = async (req, res) => {
    try{
        const {modelo, color, velocidad_maxima, id_personaje } = req.body
        const karts = await prisma.karts.create({ 
            data: {
                modelo,
                color,
                velocidad_maxima,
                id_personaje
            }
        })
        return res.status(200).json({karts, message: 'Kart creado correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha ocurrido un error al crear el kart, verifica los datos'})
    }
  };

const getAllKarts = async (req, res) => {
    try{
        const karts = await prisma.karts.findMany()
        return res.status(200).json({karts, message: 'Karts retornados con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error al retornar los karts'})
    }
    };
  
const getKartsById = async (req, res) => {
    try{
        const { id } = req.params
        const karts = await prisma.karts.findUnique({ 
            where: { 
                id: Number(id) 
            } 
        })
        if(!karts){
            return res.status(404).json({error: 'No existe un kart con esa id'})
        }
        return res.status(200).json({karts, message: 'Kart retornado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un problema al retornar el kart, verifique los datos'})
    }
    };

const updateKarts = async (req, res) => {
    try{
        const { id } = req.params
        const { modelo, color, velocidad_maxima, id_personaje } = req.body
        const karts = await prisma.karts.update({   
            where: { 
                id: Number(id) 
            },
            data: {
                modelo: modelo || karts.modelo,
                color: color || karts.color,
                velocidad_maxima: velocidad_maxima || karts.velocidad_maxima,
                id_personaje: id_personaje || karts.id_personaje
            }
        })
        if(!karts){
            return res.status(404).json({error: 'No existe un kart con esa id'})
        }
        return res.status(200).json({karts, message: 'Kart actualizado con exito'})    
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un problema actualizando el kart, verifique los datos'})
    }
    };
    
const deleteKarts = async (req, res) => {
    try{
        const { id } = req.params
        const karts = await prisma.karts.delete({
            where: { 
                id: Number(id) 
            } 
        })
        if(!karts){
            return res.status(404).json({error: 'No existe un kart con esa id'})
        }
        return res.status(200).json({karts, message: 'Kart eliminado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un problema eliminando el kart, verifique los datos'})
    }
    };
      
export default KartsController

const KartsController = {
    createKarts,
    getAllKarts,
    getKartsById, 
    updateKarts,
    deleteKarts
};  