const { Router }  = require("express");
//
const productoArchivo  = require("./controller/productoArchivoController");
const productoMongoDB = require('./controller/productoMongoDBController');
const productoFirebase = require('./controller/productoFirebaseController');

const apiProductos = app =>{
    const routerArchivo = new Router();
    const routerMongoDB = new Router();
    const routerFirebase = new Router();

    //Archivo
    app.use("/api/productosArchivo", routerArchivo);
    //Listar todos los productos
    routerArchivo.get("/",productoArchivo.productosGet);
    //Listar un producto por id
    routerArchivo.get("/:id", productoArchivo.productoGetById);
    //Agregar producto
    routerArchivo.post("/", productoArchivo.productoPost);
    //Actualizar producto por id
    routerArchivo.put("/:id", productoArchivo.productoUpdate);
    //Eliminar producto por id
    routerArchivo.delete("/:id", productoArchivo.productoDelete);

    //MongoDB
    app.use("/api/productosMongoDB", routerMongoDB);
    //Listar todos los productos
    routerMongoDB.get("/",productoMongoDB.productosGet);
    //Listar un producto por id
    routerMongoDB.get("/:id", productoMongoDB.productoGetById);
    //Agregar producto
    routerMongoDB.post("/", productoMongoDB.productoPost);
    //Actualizar producto por id
    routerMongoDB.put("/:id", productoMongoDB.productoUpdate);
    //Eliminar producto por id
    routerMongoDB.delete("/:id", productoMongoDB.productoDelete);
    
    
    //Firebase
    app.use("/api/productosFirebase", routerFirebase);
    //Listar todos los productos
    routerFirebase.get("/",productoFirebase.productosGet);
    //Listar un producto por id
    routerFirebase.get("/:id", productoFirebase.productoGetById);
    //Agregar producto
    routerFirebase.post("/", productoFirebase.productoPost);
    //Actualizar producto por id
    routerFirebase.put("/:id", productoFirebase.productoUpdate);
    //Eliminar producto por id
    routerFirebase.delete("/:id", productoFirebase.productoDelete);
    
}

module.exports = {
    apiProductos
}