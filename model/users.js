const msg = require("mongoose");
const userSchema = new msg.Schema({
    name:String,
    lastName:String,
    badge:Number
});

msg.model("User",userSchema);
