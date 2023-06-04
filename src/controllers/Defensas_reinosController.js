import prisma from '../prismaClient.js'

const createDefensas_reinos = async (req, res) => {
  const {id_reinos, id_defensas} = req.body
  try {

    const reinos = await prisma.reinos.findUnique({
      where: {id: id_reinos}
    })

    const defensas = await prisma.defensas.findUnique({
      where: {id: id_defensas}
    })
    
    if(!reinos) {
      return res.status(404).json({error: 'No existe el reino con ese id'})
    }

    if(!defensas) {
      return res.status(404).json({error: 'No existe una defensa con ese id'})
    }

    const defensas_reinos = await prisma.defensas_reinos.create({
      data: {
        id_reinos: {connect: {id_reinos: id_reinos}},
        id_defensas: {connect: {id_defensas: id_defensas}}
      }
    })
    return res.status(200).json({defensas_reinos, message: 'Interseccion defensas_reino creada con exito'})
  }catch (error) {
    console.error(error),
    res.status(500).json({error: 'Error al crear la intersecion'})
  }
};

const getDefensas_reinos = async (req, res) => {
  try{
    const defensas_reinos = await prisma.defensas_reinos.findMany()
    res.status(200).json({defensas_reinos, message: 'Interseccion defensas_reino retornadas con exito' })
  }catch{
    console.error(error);
    res.status(500).json({error: 'Error al obtener la tabla'})
  }
};

const getDefensas_reinosById = async (req, res) => {
 try{
  const {id_reinos, id_defensas} = req.params
  const defensas_reinos = await prisma.defensas_reinos.findUnique({
    where: {
        id_reinos : Number(id_reinos),
        id_defensas: Number(id_defensas)
    }
  })
  if(!id_reinos){
    return res.status(404).json({error: 'Debes ingrear una id de reino valida'})
  }
  if(!id_defensas){
    return res.status(404).json({error: 'Debes ingrear una id de defensas valida'})
  }
  if(!defensas_reinos){
    return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
  }
  return res.status(200).json({defensas_reinos, message: 'Interseccion retornada con exito'})
  
 }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error al obtener la intersecion'})
 }
};

const updateDefensas_reinos = async (req, res) => {
  try{
    const {id_reinos, id_defensas} = req.params
    if(!id_reinos){
      return res.status(404).json({error: 'Debes ingrear una id de reino valida'})
    }
    if(!id_defensas){
      return res.status(404).json({error: 'Debes ingrear una id de defensas valida'})
    }
    const defensas_reinos = await prisma.defensas_reinos.update({
      where: {
        id_reinos : Number(id_reinos),
        id_defensas: Number(id_defensas)
        },
        data: {}
    })
    if(defensas_reinos){
      return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
    }
    res.status(200).json({defensas_reinos, message: 'Interseccion actualizada con exito'})
  }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error actualizando la interseccion, verifique los datos'})
  }
};

const deleteDefensas_reinos = async (req, res) => {
  try{
    const {id_reinos, id_defensas} = req.params
    if(!id_reinos){
      return res.status(404).json({error: 'Debes ingrear una id de reino valida'})
    }
    if(!id_defensas){
      return res.status(404).json({error: 'Debes ingrear una id de defensas valida'})
    }
    const verify = await prisma.defensas_reinos.findUnique({
      where: {
        id_reino: Number(id_reinos),
        id_defensas: Number(id_defensas)
      }
    })
    if(!verify){
      return res.status(404).json({error: 'No existe una interseccion con las ids entregadas, verificalas' })
    }
    const defensas_reinos = await prisma.defensas_reinos.delete({
      where: {
        id_reinos: Number(id_reinos),
        id_defensas: Number(id_defensas)
      }
    })
    return res.status(200).json({message: 'Interseccion eliminada con exito'}) 
  }catch(error){
    console.error(error)
    res.status(500).json({error: 'Error al eliminar la interseccion'})
  }

};

const Defensas_reinosController = {
  createDefensas_reinos,
  getDefensas_reinos,
  getDefensas_reinosById,
  updateDefensas_reinos,
  deleteDefensas_reinos
};

export default Defensas_reinosController;