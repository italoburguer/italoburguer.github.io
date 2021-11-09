const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//mongoose.set("useFindAndModify", false);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/italoBurguer`,
{useNewUrlParser: true, useUnifiedTopology: true }, 
(err, res) => {
    if(err){
        throw err;
    }else{
        console.log("CONEXIÓN ESTABLECIDAD CON LA BASE DE DATOS");

        app.listen(port, () =>{
            console.log("______________________");
            console.log("______ API REST ______");
            console.log("______________________");
            console.log("Server is running on port-> "+port);
        });
    }
});