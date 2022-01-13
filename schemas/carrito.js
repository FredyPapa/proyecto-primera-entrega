const Joi = require("joi");

let timestamp = Joi.string().min(3);
let productos = Joi.array().items(Joi.object())

const carritosSchema = {
    timestamp:timestamp.required(),
    productos: productos
}

module.exports = {
    carritosSchema
}

