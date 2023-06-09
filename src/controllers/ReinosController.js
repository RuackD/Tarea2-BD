import prisma from '../prismaClient.js'

const createReinos = async (req, res) => {
    try{
        const {nombre, ubicacion, superficie, id} = req.body
        const reinos = await prisma.reinos.create({
            data :{
                nombre,
                ubicacion,
                superficie,
                id
            }
        })
        return res.status(200).json({reinos, message: 'Reino creado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error creando el reino'})
    }
};

const getReinos = async (req, res) => {
    try{
        const reinos = await prisma.reinos.findMany();
        return res.status(200).json({reinos, message: 'Reinos retornados con exito'});
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error retornando los reinos'})
    }
};

const getReinosById = async (req, res) => {
    try{
        const { id } = req.params
        const reinos = await prisma.reinos.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(!reinos){
            return res.status(404).json({error: 'No existe reino con ese id'})
        }
        return res.status(200).json({reinos, message: 'Reino retornado con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error retornando el reino, verifique los datos'})
    }
};

const updateReinos = async (req, res) => {
    try{
        const { id } = req.params
        const {nombre, ubicacion, superficie} = req.body
        const verify = await prisma.reinos.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(!verify){
            return res.status(404).json({error: 'No existe reino con ese id'})
        }
        const reinos = await prisma.reinos.update({
            where: {
                id: Number(id)
            },
            data: {
                nombre: nombre || verify.nombre,
                ubicacion: ubicacion || verify.ubicacion,
                superficie: superficie	|| verify.superficie
            }
        })
        return res.status(200).json({reinos, message: 'Reino actualizado con existo'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error actualizando el reino, verifique los datos'})
    }
};


const deleteReinos = async (req , res) => {
    try{
        const{ id } = req.params
        const verify = await prisma.reinos.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(!verify){
            return res.status(404).json({error: 'No existe reino con ese id'})
        }
        const reinos = await prisma.reinos.delete({
            where: { 
                id: Number(id)
            }
        })
        return  res.status(200).json({reinos, message: 'Reino eliminado con exito'});
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error eliminando el reino, verifique los datos'})
    }
};

const ReinosController = {
    createReinos,
    getReinos,
    getReinosById,
    updateReinos,
    deleteReinos
};

export default ReinosController