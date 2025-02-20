const express = require('express');


const prodotti = [
    {
      id : 1,
      titolo: "Ciambellone",
      descrizione: "Il ciambellone è un dolce tradizionale italiano, noto per la sua forma a ciambella, soffice e alta.",
      immagine: `http://localhost:3000/images/ciambellone.jpeg`,
      ingredienti: ["farina", "zucchero", "uova", "latte", "olio", "lievito"]
    },
    {
      id : 2,
      titolo: "Cracker alla barbabietola",
      descrizione: "I cracker alla barbabietola sono uno snack croccante    e salutare, perfetto per chi cerca un'alternativa ai classici cracker",
      immagine: `http://localhost:3000/images/cracker_barbabietola.jpeg`,
      ingredienti: ["farina di barbabietola", "farina di grano", "olio d'oliva", "sale"]
    },
    {
      id : 3,
      titolo: "Pane fritto dolce",
      descrizione: "Il pane fritto dolce è una delizia semplice e gustosa, perfetta per una colazione speciale o un dessert sfizioso",
      immagine: `http://localhost:3000/images/pane_fritto_dolce.jpeg`, 
      ingredienti: ["fette di pane raffermo","uova", "latte", "zucchero", "olio di frittura"]
    },
    {
      id : 4,
      titolo: "Pasta alla barbabietola",
      descrizione: "La pasta alla barbabietola è un piatto colorato e saporito che unisce la dolcezza della barbabietola con la consistenza della pasta.",
      immagine: `http://localhost:3000/images/pasta_barbabietola.jpeg`,  
      ingredienti: ["pasta", "barbabietole cotte e frullate", "aglio", "olio d'oliva", "sale", "pepe",  "formaggio grattugiato"]
    },
    {
      id : 5,
      titolo: "Torta paesana",
      descrizione: "La torta paesana, conosciuta anche come torta di pane o torta nera, è un dolce tradizionale della Lombardia, in particolare della Brianza",
      immagine: `http://localhost:3000/images/torta_paesana.jpeg`,
      ingredienti: ["pane raffermo", "latte", "cacao", "zucchero", "uova", "pinoli", "uvetta", "amaretti"]
    }
  ];

  module.exports = prodotti;