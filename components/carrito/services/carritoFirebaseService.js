let {db:firebaseDB} = require('../../../utils/firebase');

class CarritoFirebase{
    //Crear un carrito
    async save(data){
        try {
            let carrito = firebaseDB.collection("carrito");
            return await carrito.doc().set(data);
        } catch (error) {
            console.log(error);
        }
    }
    //Eliminar un carrito según Id
    async deleteById(id){
        try {
            //Declaramos un arreglo vacío
            let dataFirebase = [];
            //Nos ubicamos en la colección carrito
            let carrito = firebaseDB.collection("carrito");
            //Obtenemos la data
            let res = await carrito.get();
            //Almacenamos en el arreglo
            res.forEach(element =>{
                dataFirebase.push({id: element.id, ...element.data()})
            });
            //Eliminamos
            dataFirebase.forEach(async elemento =>{
                if(elemento.id === id){
                    return await carrito.doc(elemento.id).delete();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    //Obtener los productos de un carrito por Id
    async getByIdProductos(id){
        try {
            //Declaramos un arreglo vacío
            let dataFirebase = [];
            //Nos ubicamos en la colección carrito
            let carrito = firebaseDB.collection("carrito");
            //Obtenemos la data
            let res = await carrito.get();
            //Almacenamos en el arreglo
            res.forEach(element =>{
                dataFirebase.push({id: element.id, ...element.data()})
            });
            //Filtramos el resultado a mostrar
            let filtro = dataFirebase.filter(elemento=>elemento.id===id);
            //Devolvemos el resultado
            return filtro[0].productos;
        } catch (error) {
            console.log(error);
        }
    }
    //Agregar producto a un carrito por id
    async addProductoToCarritoById(id,data){
        try {
            //return await CarritoModel.findOneAndUpdate({"_id": ObjectId(id)},{$push:{productos:data}});
        } catch (error) {
            console.log(error);
        }
    }
    //Eliminar producto del carrito por id
    async deleteProductoCarritoById(id, id_prod){
        try {
            /*let {productos} = await CarritoModel.findOne({"_id": ObjectId(id)},{productos:1,_id:0});
            console.log(productos);
            productos = productos.filter((producto)=>{
                return producto.id !== id_prod;
            });
            return await CarritoModel.findOneAndUpdate({"_id": ObjectId(id)},{$set:{productos:productos}});*/
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CarritoFirebase();
