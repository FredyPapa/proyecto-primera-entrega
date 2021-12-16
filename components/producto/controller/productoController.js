const Service  = require("../services/productoService");
let service = new Service("./files/productos.txt");

//Flag de administrador
const administrador = true;

//Listar todos los productos
const productosGet = async(req,res,next)=>{
    res.send(await service.getAll());
}

//Listar un producto por id
const productoGetById = async(req,res,next)=>{
    const id = parseInt(req.params.id);
    res.send(await service.getById(id));
}

//Agregar producto
const productoPost = async(req,res,next)=>{
    if(administrador){
        const now = new Date();
        const producto = {
            timestamp: now,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            foto: req.body.foto,
            precio: req.body.precio,
            stock: req.body.stock
        };
        res.json(await service.save(producto));
    }else{
        const ruta = req.baseUrl + req.path;
        res.json({"error": -1, "descripcion":`Ruta ${ruta} no autorizada`});
    }
}

//Actualizar producto
const productoUpdate = async(req,res,next)=>{
    if(administrador){
        const now = new Date();
        const id = parseInt(req.params.id);
        const producto = {
            timestamp: now,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            foto: req.body.foto,
            precio: req.body.precio,
            stock: req.body.stock
        };
        res.json(await service.updateById(id,producto));
    }else{
        const ruta = req.baseUrl + req.path;
        res.json({"error": -1, "descripcion":`Ruta ${ruta} no autorizada`});
    }
}

//Eliminar producto por id
const productoDelete = async(req,res,next)=>{
    if(administrador){
        let id = parseInt(req.params.id);
        res.json(await service.deleteById(id));
    }else{
        const ruta = req.baseUrl + req.path;
        res.json({"error": -1, "descripcion":`Ruta ${ruta} no autorizada`});
    }
}

module.exports = {
    productosGet,
    productoGetById,
    productoPost,
    productoUpdate,
    productoDelete
}
