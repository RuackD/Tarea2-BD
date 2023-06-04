import prisma from '../prismaClient.js'

const createDefensas = async (req, res) => {
    try{
        const{ defensa } = req.body
        const defensas = await prisma.defensas.create({
            data: {
                defensa
            }
        })
        return res.status(200).json({defensas, message: 'Defensa creada correctamente'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error creando la defensa'})
    }
};

const getAllDefensas = async (req, res) => {
    try{
        const defensas = await prisma.defensas.findMany()
        return res.status(200).json({defensas, message: 'Defensas retornadas con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error obteniendo las defensas'})
    }
};

const getDefensasById = async (req, res) => {
    try{
        const { id } = req.params
        const defensas = await prisma.defensas.findUnique({
            where: {
                id: Number(id)
            }
        })
        if(!defensas){
            return res.status(404).json({error: 'No existe una defensa con esa id'})
        }
        return res.status(200).json({defensas, message: 'Defensa retornada con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error obeniendo la defensa, verifique los datos'})
    }
};

const updateDefensas = async (req, res) => {
    try{
        const { id } = req.params
        const { defensa } = req.body
        const defensas = await prisma.defensas.update({
            where: {
                id: Number(id)
            },
            data: {
                defensa: defensa || defensas.defensa
            }
        })
        if(!defensas){
            return res.status(404).json({error: 'No existe una defensa con esa id'})
        }
        return res.status(200).json({defensas, message: 'Defensa actualizada con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error actualizando las defensas, verifique los datos'})
    }
};

const deleteDefensas = async (req, res) => {
    try{
        const { id } = req.params
        const defensas = await prisma.defensas.delete({
            where: {
                id: Number(id)
            }
        })
        if(!defensas){
            return res.status(404).json({error: 'No existe defensa con esa id'})
        }
        return res.status(200).json({message: 'Defensa eliminada con exito'})
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Ha habido un error eliminando la defensa, verifique los datos'})
    }
};

export default DefensasController

const DefensasController = {
    createDefensas,
    getAllDefensas,
    getDefensasById,
    updateDefensas,
    deleteDefensas
}