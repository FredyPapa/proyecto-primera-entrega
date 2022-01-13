const { apiProductos } = require("../components/producto");
const { apiCarrito } = require("../components/carrito");

const serverRouter = app =>{
    apiProductos(app);
    apiCarrito(app);
    //
    app.get("*",(req,res,next)=>{
        const ruta = req.baseUrl + req.path;
        res.json({"error": -2, "descripcion":`Ruta ${ruta} no implementada`});
    });
}

module.exports = {
    serverRouter
}