import prisma from '../prismaClient.js'

const createDiplomacias = async (req, res) => {
  const {id_reino1, id_reino2, es_aliado} = req.body
  try {

    const reino1 = await prisma.reinos.findUnique({
      where: {id: id_reino1}
    })

    const reino2 = await prisma.reinos.findUnique({
        where: {id: id_reino2}
    })

    if(!reino1) {
        return res.status(404).json({error: 'No existe el reino con la primera id'})
    }

    if(!reino2) {
        return res.status(404).json({error: 'No existe el reino con la segunda id'})
    }

    const diplomacias = await prisma.diplomacias.create({
      data: {
        id_reino_1: {connect: {id_reino_1: reino1.id}},
        id_reino_2: {connect: {id_reino_2: reino2.id}},
        es_aliado
      }
    })
    return res.status(200).json({diplomacias, message: 'Diplomacia creada con exito'})
  }catch (error) {
    console.error(error),
    res.status(500).json({error: 'Error al crear la Diplomacia'})
  }
};

const getDiplomacias = async (req, res) => {
  try{
    const diplomacias = await prisma.diplomacias.findMany()
    res.status(200).json({diplomacias, message: 'diplomacias retornadas con exito' })
  }catch{
    console.error(error);
    res.status(500).json({error: 'Error al obtener las diplomacias'})
  }
};

const getDiplomaciasById = async (req, res) => {
 try{
  const {id_reino1, id_reino2} = req.params
  const diplomacias = await prisma.diplomacias.findUnique({
    where: {
        id_reino_1 : Number(id_reino1),
        id_reino_2: Number(id_reino2)
    }
  })
  if(!id_reino1){
    return res.status(404).json({error: 'Debes ingrear una id de reino valida'})
  }
  if(!id_reino2){
    return res.status(404).json({error: 'Debes ingrear una id de reino valida'})
  }
  if(!diplomacias){
    return res.status(404).json({error: 'No existe una diplomacia entre las ids entregadas, verificalas'})
  }
  return res.status(200).json({diplomacias, message: 'Diplomacia retornada con exito'})
  
 }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error al obtener la diplomacia'})
 }
};

const updateDiplomacias = async (req, res) => {
  try{
    const {id_reino1, id_reino2} = req.params
    const {es_aliado} = req.body
    const verify = await prisma.diplomacia.findUnique({
        where: {
            id_reino_1: Number(id_reino1),
            id_reino_2: Number(id_reino2)
        }
    })
    if(!verify){
        return res.status(404).json({error: 'No existe interseccion con los ids entregados, verifiquelos'})
    }
    const diplomacias = await prisma.diplomacias.update({
      where: {
        id_reino_1 : Number(id_reino1),
        id_reino_2: Number(id_reino2)
        }
    },
    {
      data: {
        es_aliado: es_aliado || verify.es_aliado
      }
    })
    return res.status(200).json({diplomacias, message: 'Diplomacia actualizada con exito'})
  }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error actualizando la diplomacia, verifique los datos'})
  }
};

const deleteDiplomacias = async (req, res) => {
  try{
    const {id_reino1, id_reino2} = req.params   
    const verify = await prisma.diplomacias.findUnique({
      where: {
        id_reino_1: Number(id_reino1),
        id_reino_2: Number(id_reino2)
      }
    })
    if(!verify){
      return res.status(404).json({error: 'No existe una interseccion con las ids entregadas, verificalas' })
    }
    const diplomacias = await prisma.diplomacias.delete({
      where: {
        id_reino_1: Number(id_reino1),
        id_reino_2: Number(id_reino2)
      }
    })
    return res.status(200).json({message: 'Diplomacias eliminada con exito'}) 
  }catch(error){
    console.error(error)
    res.status(500).json({error: 'Error al eliminar la diplomacia'})
  }

};

const DiplomaciasController = {
  createDiplomacias,
  getDiplomacias,
  getDiplomaciasById,
  updateDiplomacias,
  deleteDiplomacias
};

export default DiplomaciasController
