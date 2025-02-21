const express = require('express')
//vero db
const connection = require('../data/db');
//falso db
const posts = require('../data/productsData');


//index
const index = (req, res) => {
   
    const sql = `SELECT * FROM posts`;

    connection.query(sql, (err,result) => {
        if(err) {
            return res.status(500).json({
                error : 'Database quesry failed'})
        }
        res.json(result);
       
    })

};

//show
const show = (req, res) => {
  
    const postSql = `SELECT * FROM posts WHERE id = ?`
    const tagsSql = `
    SELECT tags.id , tags.label FROM tags
    JOIN post_tag ON tags.id = post_tag.tag_id
     WHERE post_tag.post_id = ?
     `
    const id = req.params.id
    connection.query(postSql,[id], (err, result) =>{
        if(err){
            return res.status(500).json({
                error: 'Database query failed'
            })
        }
        const post = result[0]

        if (!post) {
            res.status(404);
            return res.json({
            status: 404,
            error: "Not Found",
            message: "Prodotto non trovato"
            })
        }
        
        connection.query(tagsSql, [id], (err, result) => {
            if(err){
                return res.sendStatus(500).json({
                    error: 'Database query failed'
                })
            }

            post.tags = result;
            res.json(post)
        })
       

       
    });
    

};

//store
const store = (req, res) => {

//Creo una nuova id
    const id = posts[posts.length - 1].id + 1;

//Dichiaro la variabile che conterrà il nuovo prodotto
    const newPost = {
        id,
        ...req.body
    }

//Push del nuovo prodotto all intero dell array
    posts.push(newPost)
    
    res.status(201)
    res.json(newPost)
 };

 //update
 const update = (req, res) => {
// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Cerchiamo il prodotto all interno dell array con find.
    const post = posts.find(elm => elm.id === id)

    if (!post) {
        res.status(404);
        return res.json({
        status: 404,
        error: "Not Found",
        message: "Prodotto non trovato"
        })
    }

//Assegnbo i nuovi valori a quelli già esistenti
    post.titolo = req.body.titolo
    post.descrizione = req.body.descrizione
    post.immagine = req.body.immagine
    post.ingredienti = req.body.ingredienti
   
    res.json(post)
};

//modify
const modify = (req,res) => {

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Inizializzo la variabile dell index a false
     let indexFound = false;

//Cerchiamo il prodotto all interno dell array con forEach.    
     posts.forEach((elm , index) => {
        
//Primo controllo per verificare che l id sia uguale
        if(elm.id === id){
          indexFound = index  
        }
    });

//Secondo controllo per verifican che abbia trovato l oggetto
        if(indexFound !== false){
           let post = posts[indexFound];

           post = {
            ...post,
            ...req.body
            
           }

//Assegnazione del prodotto al prodotto già esistente
           posts[indexFound] = post
        
           res.json(post)
        }else{
                res.status(404);
                return res.json({
                status: 404,
                error: "Not Found",
                message: "Prodotto non trovato"
                })
        }     

};

//delete
const destroy = (req, res) => {

    const sql = `DELETE FROM posts WHERE id = ?`
    const id = req.params.id

    connection.query(sql, [id], (err, result) => {
      if(err){
     return res.status(500).json({
        error: 'Database query failed'
     })
    }
     res.sendStatus(204)
    })
  
};



 module.exports = { index , show, store, update, modify, destroy}

