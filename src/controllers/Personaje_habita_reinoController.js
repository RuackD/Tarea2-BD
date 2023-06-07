import prisma from '../prismaClient.js'

const createPersonaje_Habita_Reino = async (req, res) => {
  const {id_personaje, id_reino} = req.params
  const {fecha_registro, es_gobernante} = req.body
  try {
    const personaje = await prisma.personajes.findUnique({
      where: {id: id_personaje}
    })
    const reino = await prisma.reinos.findUnique({
      where: {id: id_reino}
    })
    if(!personaje) {
      return res.status(404).json({error: 'No existe el personaje con ese id'})
    }
    if(!reino) {
      return res.status(404).json({error: 'No existe el reino con ese id'})
    }
    const personaje_habita_reino = await prisma.personaje_habita_reino.create({
      data: {
        id_personaje: {connect: {id_personaje: id_personaje}},
        id_reino: {connect: {id_reino: id_reino}},
        fecha_registro,
        es_gobernante
      }
    })
    return res.status(200).json({personaje_habita_reino, message: 'Interseccion personaje_habita_reino creada con exito'})
  }catch (error) {
    console.error(error),
    res.status(500).json({error: 'Error al crear la intersecion'})
  }
};

const getPersonaje_habita_reino = async (req, res) => {
  try{
    const personaje_habita_reino = await prisma.personaje_habita_reino.findMany()
    res.status(200).json({personaje_habita_reino, message: 'Interseccion personaje-reino retornadas con exito' })
  }catch{
    console.error(error);
    res.status(500).json({error: 'Error al obtener la tabla'})
  }
};

const getPersonaje_habita_reinoById = async (req, res) => {
 try{
  const {id_personaje, id_reino} = req.params
  const personaje_habita_reino = await prisma.personaje_habita_reino.findUnique({
    where: {id_personaje : Number(id_personaje),
    id_reino: Number(id_reino)}
  })
  if(!personaje_habita_reino){
    return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
  }
  return res.status(200).json({personaje_habita_reino, message: 'Interseccion retornada con exito'})
  
  }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error al obtener la intersecion'})
  }
};

const updatePersonaje_habita_reino = async (req, res) => {
  try{
    const {id_personaje, id_reino, fecha_registro, es_gobernante} = req.params

    const verify = await prisma.personaje_habita_reino.findUnique({
      where: {
        id_personaje: Number(id_personaje),
        id_reino: Number(id_reino)
      }
    })

    if(!verify){
      return res.status(404).json({error: 'No hay una interseccionn con las ids otorgadas, verificalas'})
    }

    const personaje_habita_reino = await prisma.personaje_habita_reino.update({
      where: {
        id_personaje : Number(id_personaje),
        id_reino: Number(id_reino)
        }
    },
    {
      data: {
        fecha_registro: fecha_registro || personaje_habita_reino.fecha_registro,
        es_gobernante: es_gobernante || personaje_habita_reino.es_gobernante
      }
    })
    if(!personaje_habita_reino){
      return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
    }
    res.status(200).json({personaje_habita_reino, message: 'Interseccion actualizada con exito'})
  }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error actualizando la interseccion, verifique los datos'})
  }
};

const deletePersonaje_habita_reino = async (req, res) => {
  try{
    const {id_personaje, id_reino} = req.params
    const verify = await prisma.personaje_habita_reino.findUnique({
      where: {
        id_personaje: Number(id_personaje),
        id_reino: Number(id_reino)
      }
    })
    if(!verify){
      return res.status(404).json({error: 'No existe una interseccion con las ids entregadas, verificalas' })
    }
    const personaje_habita_reino = await prisma.personaje_habita_reino.delete({
      where: {
        id_personaje: Number(id_personaje),
        id_reino: Number(id_reino)
      }
    })
    return res.status(200).json({message: 'Interseccion eliminada con exito'}) 
  }catch(error){
    console.error(error)
    res.status(500).json({error: 'Error al eliminar la interseccion'})
  }
};

const Personaje_habita_reinoController = {
  createPersonaje_Habita_Reino,
  getPersonaje_habita_reino,
  getPersonaje_habita_reinoById,
  updatePersonaje_habita_reino,
  deletePersonaje_habita_reino
};

export default Personaje_habita_reinoController;