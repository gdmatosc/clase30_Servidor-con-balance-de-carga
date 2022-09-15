const express=require('express')
const { Router }=express
//const {fork}=require('child_process')
const { calculo } = require('../b6.funciones_adicionales/operacion1.js')

const apiRouterOper=Router(); 

apiRouterOper.get('/numerosRandom/:id', (req, res) => {
    let cant = req.query.cant
    console.log("cant.apiRouterGet",cant)
    console.log("Alive")
    resultado=calculo(cant)
    console.log("resultado.apiRouterOper.Get",resultado)
    return res.json(resultado)
   
});

module.exports=apiRouterOper