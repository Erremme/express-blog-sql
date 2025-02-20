const express = require('express');



const middlewareValidationId =  (req , res , next) => {
    const id = parseInt(req.params.id)
    if(isNaN (id)){
       return res.sendStatus(400);
     }  
     next()
}

module.exports = middlewareValidationId;



