const Joi = require("joi");
let timestamp = Joi.string().min(3);
let nombre = Joi.string().min(3);
let descripcion = Joi.string().min(3);
let codigo = Joi.string().min(3);
let foto = Joi.string().min(3);
let precio = Joi.number().min(1);
let stock = Joi.number().min(1);

const productosSchema = {
    timestamp: timestamp.required(),
    nombre: nombre.required(),
    descripcion: descripcion.required(),
    codigo: codigo.required(),
    foto: foto.required(),
    precio: precio.required(),
    stock: stock.required(),
}


module.exports = {
    productosSchema
}