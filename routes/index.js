const { response } = require("express");
const express = require("express");
const mgdb = require("mongoose");

const db = require("../model/db").
        user = require("../model/users");

//Primera forma de conectarse
const router = express.Router();
// Esto se usa si tenemos un error 500
router.use(express.json());
router.use(express.urlencoded({extended:true}))

//READ AND CREATE
router.route("/")
        .get((req, res, next)=>{
                mgdb.model("User").find({}, (err, users)=>{
                        if(err) throw err;
                        res.json(users);
                })
        })
        .post(function(req,res){
                let name = req.body.name;
                let lastName = req.body.lastName;
                let badge = req.body.badge;

                mgdb.model("User").create({
                        name:name,
                        lastName:lastName,
                        badge:badge
                }, (err,user)=>{
                        if(err) res.json({"message":"user does not saved"});
                        console.log("saved",user);
                        res.json(user);
                })
        })
//UPDATE
router.route("/:id")
        .get(function(req,res){
            mgdb.model("User").findById(req.params.id,(err,user)=>{
                    if(err){
                            console.log("There was a problem", err);
                    }else{
                          console.log("Retrieving id", req.param.id);
                          res.json(user)
                    }

            })
        })
        .put(function(req,res){
                let name = req.body.name;
                let lastName = req.body.lastName;
                let badge = req.body.badge;
                mgdb.model("User").findById(req.params.id, (err,user)=>{
                        if(err){
                                console.log("There was a problem",err);
                                res.status(500);
                                response.json({"message":err});
                        }else{
                                user.updateOne({
                                      "name": name,
                                      "lastName": lastName,
                                      "badge": badge  
                                },(err,id)=>{
                                        if(err) console.log("There was a problem",err)
                                        res.json(user);
                                })
                        }
                })
        })
        //DELETE
        .delete(function(req,res){
                mgdb.model("User").findById(req.params.id, (err,user)=>{
                        if(err){
                                console.log("There was a problem",err);
                                res.status(500);
                                response.json({"message":err});  
                        }else{
                                user.remove((req,user)=>{
                                        if (err) console.log("Does not remove")
                                        res.json({
                                                "message":"deleted",
                                                "user":user
                                        })
                                })
                        }
                })
        })

module.exports = router;