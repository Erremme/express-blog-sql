const express = require('express')
const prodotti = require('../data/productsData');

//index
const index = (req, res) => {
   
//Inizializziamo una variabile e salviamo all suo interno l array.
   let filteredProducts = prodotti

//Facciamo un controllo che verifichi che l ingrediente sia all interno dell array.   
   if (req.query.ingredienti) {
    filteredProducts = prodotti.filter(
    elm => elm.ingredienti.includes(req.query.ingredienti));
};

//Restituiamo l array sia che la condizione sia verificata o meno.
    res.json(filteredProducts)
};

//show
const show = (req, res) => {

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Cerchiamo il prodotto all interno dell array con find.
    const prodotto = prodotti.find(elm => elm.id === id)

//Controllo per verificare che sia all interno dell array.
if (!prodotto) {
    res.status(404);
    return res.json({
    status: 404,
    error: "Not Found",
    message: "Prodotto non trovato"
    })
}

     
//Restituiamo il prodotto che contiene lo stesso id della req.
    res.json(prodotto);
};

//store
const store = (req, res) => {

//Creo una nuova id
    const id = prodotti[prodotti.length - 1].id + 1;

//Dichiaro la variabile che conterrà il nuovo prodotto
    const newProduct = {
        id,
        ...req.body
    }

//Push del nuovo prodotto all intero dell array
    prodotti.push(newProduct)
    
    res.status(201)
    res.json(newProduct)
 };

 //update
 const update = (req, res) => {
// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Cerchiamo il prodotto all interno dell array con find.
    const prodotto = prodotti.find(elm => elm.id === id)

    if (!prodotto) {
        res.status(404);
        return res.json({
        status: 404,
        error: "Not Found",
        message: "Prodotto non trovato"
        })
    }

//Assegnbo i nuovi valori a quelli già esistenti
    prodotto.titolo = req.body.titolo
    prodotto.descrizione = req.body.descrizione
    prodotto.immagine = req.body.immagine
    prodotto.ingredienti = req.body.ingredienti
   
    res.json(prodotto)
};

//modify
const modify = (req,res) => {

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

//Inizializzo la variabile dell index a false
     let indexFound = false;

//Cerchiamo il prodotto all interno dell array con forEach.    
     prodotti.forEach((elm , index) => {
        
//Primo controllo per verificare che l id sia uguale
        if(elm.id === id){
          indexFound = index  
        }
    });

//Secondo controllo per verifican che abbia trovato l oggetto
        if(indexFound !== false){
           let prodotto = prodotti[indexFound];

           prodotto = {
            ...prodotto,
            ...req.body
            
           }

//Assegnazione del prodotto al prodotto già esistente
           prodotti[indexFound] = prodotto
        
           res.json(prodotto)
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

// Salviamo il valore numerico di id.
    const id = parseInt(req.params.id)

// Cerchiamo il prodotto tramite id.
    const prodotto = prodotti.find(elm => elm.id === id);

// Controlliamo che il prodotto sia all interno del nostro array.
    if (!prodotto) {
        res.status(404);
        return res.json({
        status: 404,
        error: "Not Found",
        message: "Prodotto non trovato"
})
}
// Rimuoviamo il prodotto dalla lista
    prodotti.splice(prodotti.indexOf(prodotto), 1);
//Restituiamo al client il messaggio che indica che òla cancellazione è avvenuta.
    res.sendStatus(204)
};



 module.exports = { index , show, store, update, modify, destroy}

