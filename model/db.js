const msg = require("mongoose");

//puerto de mongodb es 27017 por defecto
msg.connect("mongodb://127.0.0.1:27017/misiontic", (err,db)=>{
    if(err) throw err;
    console.log("Succes!! Database conected");
});

module.exports = msg; 