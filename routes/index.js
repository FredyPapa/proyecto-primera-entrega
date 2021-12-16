const { apiProductos } = require("../components/producto");
const { apiCarrito } = require("../components/carrito");

const serverRouter = app =>{
    apiProductos(app);
    apiCarrito(app);
    /*
    app.get("/",(req,res,next)=>{
        console.log(req.body);
        res.send("Todo Ok en la raiz del proyecto");
    });
    */
    //
    app.get("*",(req,res,next)=>{
        /*console.log(req.originalUrl);
        console.log(req.baseUrl);
        console.log(req.path);
        console.log(req.baseUrl + req.path);*/
        const ruta = req.baseUrl + req.path;
        res.json({"error": -2, "descripcion":`Ruta ${ruta} no implementada`});
    });
}

module.exports = {
    serverRouter
}