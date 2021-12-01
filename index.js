const express = require("express");
const app = express();

/**
 * @author Mgagudelo
 * about: Endpoint users response
 */

//Primera forma de conectarse
const userRoutes = require("./routes/index");
app.use('/users', userRoutes);

//Dentro de la constante se recibe el numero del puerto 
// y una funciona anomina flecha 
const server = app.listen(8000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("app-web-02 listening at http://", host, port)
});

