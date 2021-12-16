const { Router }  = require("express");
const router = new Router();
//
const {carritoPost, carritoDelete, carritoGetByIdProductos, carritoPostByIdProducto, carritoProductoDelete}  = require("./controller/carritoController");

const apiCarrito = app =>{
    app.use("/api/carrito", router);
    //Crea un carrito
    router.post("/", carritoPost);
    //Eliminar carrito por id
    router.delete("/:id", carritoDelete);
    //Listar los productos de un carrito por id
    router.get("/:id/productos", carritoGetByIdProductos);
    //Agregar producto a un carrito por id
    router.post("/:id/productos", carritoPostByIdProducto);
    //Eliminar producto del carrito por id
    router.delete("/:id/productos/:id_prod", carritoProductoDelete);
}

module.exports = {
    apiCarrito
}
