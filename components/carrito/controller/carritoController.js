const Service  = require("../services/carritoService");
let service = new Service("./files/carrito.txt");

//Crea un carrito
const carritoPost = async(req,res,next)=>{
    const now = new Date();
    const carrito = {
        timestamp: now,
        productos: req.body.productos
    };
    res.json(await service.save(carrito));
}
//Eliminar carrito por id
const carritoDelete = async(req,res,next)=>{
    let id = parseInt(req.params.id);
    res.json(await service.deleteById(id));
}
//Listar los productos de un carrito por id
const carritoGetByIdProductos = async(req,res,next)=>{
    const id = parseInt(req.params.id);
    res.send(await service.getByIdProductos(id));
}
//Agregar producto a un carrito por id
const carritoPostByIdProducto = async(req,res,next)=>{
    let id = parseInt(req.params.id);
    const producto = {
        id: req.body.id,
        timestamp: req.body.timestamp,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        codigo: req.body.codigo,
        foto: req.body.foto,
        precio: req.body.precio,
        stock: req.body.stock
    };
    res.json(await service.addProductoToCarritoById(id,producto));
}
//Eliminar producto del carrito por id
const carritoProductoDelete = async(req,res,next)=>{
    let id = parseInt(req.params.id);
    let id_prod = parseInt(req.params.id_prod);
    res.json(await service.deleteProductoCarritoById(id,id_prod));
}


module.exports = {
    carritoPost,
    carritoDelete,
    carritoGetByIdProductos,
    carritoPostByIdProducto,
    carritoProductoDelete
}
