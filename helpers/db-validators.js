const { Usuario, Role, Categoria, Producto } = require('../models')

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol})
    if (!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo})
    if (existeEmail){
        throw new Error(`El correo ${correo} ya está registrado en la BD`)
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id)
    if (!existeUsuario){
        throw new Error(`No existe el id ${id}`)
    }
}

/**
 * Categorias
 */
const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById(id)
    if (!existeCategoria){
        throw new Error(`No existe el id ${id}`)
    }
}

/**
 * Productos
 */
const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById(id)
    if (!existeProducto){
        throw new Error(`No existe el id ${id}`)
    }
}

/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = (coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes(coleccion)
    if (!incluida) {
        throw new Error(`La coleccion ${coleccion} no está permitida: ${colecciones}`)
    }

    return true

}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}