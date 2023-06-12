import prisma from '../prismaClient.js'

const createPersonaje_tiene_trabajo = async (req, res) => {
  const {id_personaje, id_trabajo, fecha_inicio, fecha_termino} = req.body
  try {

    const personaje = await prisma.personajes.findUnique({
      where: {id: id_personaje}
    })

    const trabajo = await prisma.trabajos.findUnique({
      where: {id: id_trabajo}
    })
    
    if(!personaje) {
      return res.status(404).json({error: 'No existe el personaje con ese id'})
    }

    if(!trabajo) {
      return res.status(404).json({error: 'No existe un trabajo con ese id'})
    }

    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.create({
      data: {
        id_personaje: {connect: {id: id_personaje}},
        id_trabajo: {connect: {id: id_trabajo}},
        fecha_inicio,
        fecha_termino
      }
    })
    return res.status(200).json({personaje_tiene_trabajo, message: 'Interseccion personaje_tiene_trabajo creada con exito'})
  }catch (error) {
    console.error(error),
    res.status(500).json({error: 'Error al crear la intersecion'})
  }
};

const getPersonaje_tiene_trabajo = async (req, res) => {
  try{
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany()
    res.status(200).json({personaje_tiene_trabajo, message: 'Interseccion personaje_tiene_trabajo retornadas con exito' })
  }catch{
    console.error(error);
    res.status(500).json({error: 'Error al obtener la tabla'})
  }
};

const getPersonaje_tiene_trabajoById = async (req, res) => {
 try{
  const {id_personaje, id_trabajo} = req.params
  const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findUnique({
    where: {
        id_personaje : Number(id_personaje),
        id_trabajo: Number(id_trabajo)}
  })
  if(!personaje_tiene_trabajo){
    return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
  }
  return res.status(200).json({personaje_tiene_trabajo, message: 'Interseccion retornada con exito'})
  
 }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error al obtener la intersecion'})
 }
};

const updatePersonaje_tiene_trabajo = async (req, res) => {
  try{
    const {id_personaje, id_trabajo} = req.params
    const {fecha_inicio, fecha_termino} = req.body
    if(!id_personaje){
      return res.status(404).json({error: 'Debes ingrear una id de personaje valida'})
    }
    if(!id_trabajo){
      return res.status(404).json({error: 'Debes ingrear una id de trabajo valida'})
    }
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
      where: {
        id_personaje : Number(id_personaje),
        id_trabajo: Number(id_trabajo)
        }
    },
    {
      data: {
        fecha_inicio: fecha_inicio || personaje_tiene_trabajo.fecha_inicio,
        fecha_termino: fecha_termino || personaje_tiene_trabajo.fecha_termino
      }
    })
    if(!personaje_tiene_trabajo){
      return res.status(404).json({error: 'No existe una interseccion entre las ids entregadas, verificalas'})
    }
    res.status(200).json({personaje_tiene_trabajo, message: 'Interseccion actualizada con exito'})
  }catch (error) {
    console.error(error)
    res.status(500).json({error: 'Error actualizando la interseccion, verifique los datos'})
  }
};

const deletePersonaje_tiene_trabajo = async (req, res) => {
  try{
    const {id_personaje, id_trabajo} = req.params
    if(!id_personaje){
      return res.status(404).json({error: 'Debes ingrear una id de personaje valida'})
    }
    if(!id_trabajo){
      return res.status(404).json({error: 'Debes ingrear una id de trabajo valida'})
    }
    const verify = await prisma.personaje_tiene_trabajo.findUnique({
      where: {
        id_personaje: Number(id_personaje),
        id_trabajo: Number(id_trabajo)
      }
    })
    if(!verify){
      return res.status(404).json({error: 'No existe una interseccion con las ids entregadas, verificalas' })
    }
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.delete({
      where: {
        id_personaje: Number(id_personaje),
        id_trabajo: Number(id_trabajo)
      }
    })
    return res.status(200).json({message: 'Interseccion eliminada con exito'}) 
  }catch(error){
    console.error(error)
    res.status(500).json({error: 'Error al eliminar la interseccion'})
  }

};

const Personaje_tiene_trabajoController = {
  createPersonaje_tiene_trabajo,
  getPersonaje_tiene_trabajo,
  getPersonaje_tiene_trabajoById,
  updatePersonaje_tiene_trabajo,
  deletePersonaje_tiene_trabajo
};

export default Personaje_tiene_trabajoController