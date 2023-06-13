import prisma from '../prismaClient.js'

            
const createPersonajes = async (req , res) => {
    try{
        const { nombre, fuerza, fecha_nacimiento, objeto, id } = req.body
        const personajes = await prisma.personajes.create({ 
            data :{
                nombre,
                fuerza,
                fecha_nacimiento,
                objeto,
                id
            }  
        })
        return res.status(200).json({personajes, message: 'Personaje creado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha ocurrido un error al crear el personaje, verifique los datos'})
    }
  };

const getPersonajes = async (req, res) => {
    try{
        const personajes = await prisma.personajes.findMany()
        return res.status(200).json({personajes, message: 'Personajes retornados con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error al recuperar los personajes, revise los datos'})
    }
    };
  
const getPersonajesById = async (req, res) => {
    try{
        const { id } = req.params
        const personajes = await prisma.personajes.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(!personajes){
            return res.status(404).json({error: 'No existe un personaje con esa id'})
        }
        return res.status(200).json({personajes, message: 'Personaje retornado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error al recuperar el personaje, verifique los datos'})
    }
    };

const updatePersonajes = async (req, res) => {
    try{
        const { id } = req.params
        const {nombre, fuerza, fecha_nacimiento, objeto} = req.body
        const verify = await prisma.personajes.findUnique({
            where: {
                id: Number(id)
            } 
        })
        if(!verify){
            return res.status(404).json({error: 'No existe un personaje con esa id' })
        }        
        const personajes = await prisma.personajes.update({
            where: { 
                id: Number(id) 
            },
            data: {
                nombre: nombre || verify.nombre,
                fuerza: fuerza || verify.fuerza,
                fecha_nacimiento: fecha_nacimiento || verify.fecha_nacimiento,
                objeto: objeto || verify.objeto,
            }   
        })                                                          
        return res.status(200).json({personajes, message: 'Personaje actualizado con exito'});
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error al actualizar el personaje, verifique los datos'})
    }
    };
    
const deletePersonajes = async (req, res) => {
    try{
        const { id } = req.params
        const personajes = await prisma.personajes.delete({
            where: {
                id: Number(id) 
                } 
            })
        if(!personajes){
            return res.status(404).json({error: 'No existe un personaje con esa id'})
        }
        return res.status(200).json({message: 'Personaje eliminado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error al eliminar el personaje, verifique los datos'})
    }
    };
      
const PersonajesController = {
    createPersonajes,
    getPersonajes,
    getPersonajesById, 
    updatePersonajes,
    deletePersonajes
};

export default PersonajesController