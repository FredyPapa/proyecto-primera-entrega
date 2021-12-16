const { Router }  = require("express");
const router = new Router();
//
const {productosGet, productoGetById, productoPost, productoUpdate, productoDelete}  = require("./controller/productoController");

const apiProductos = app =>{
    app.use("/api/productos", router);
    //Listar todos los productos
    router.get("/",productosGet);
    //Listar un producto por id
    router.get("/:id", productoGetById);
    //Agregar producto
    router.post("/", productoPost);
    //Actualizar producto por id
    router.put("/:id", productoUpdate);
    //Eliminar producto por id
    router.delete("/:id", productoDelete);
}

module.exports = {
    apiProductos
}