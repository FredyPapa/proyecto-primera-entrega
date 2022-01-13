const mongoose = require("mongoose");
const {Config} = require('./index');

let MongoDBconnection;
(async ()=>{
    try {
        MongoDBconnection = mongoose.connect(Config.mongoAtlasUri, {useNewUrlParser:true,useUnifiedTopology: true });
        console.log("---------------------------------------------");
        console.log("Conexión establecida!");
    } catch (error) {
        console.log(error);
    }
})();

module.exports = {MongoDBconnection, mongoose}
