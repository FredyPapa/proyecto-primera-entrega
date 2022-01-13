require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongoAtlasUri: `${process.env.MONGO_ATLAS}`,
}