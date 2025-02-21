const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000
const productsRouter = require('./routers/productsRouter')
const notFound = require('./middleware/middleWareNotFound')
const errorsHandler = require ('./middleware/middleWareErrorHandlers')

app.use(cors({origin :" http://localhost:5173"}))

//registro il body-parser per "application/json"
app.use(express.json());

//Middleware per asset statici
app.use(express.static('public'))

//rotta ('/')
app.get('/', (req, res) => {
  res.send('Server del mio blog!')
})

//Importo il prefisso delle rotte e le rotte
app.use("/posts", productsRouter);

//Middleware per rotte non trovate
app.use(notFound);

//Middleware per errori del server
app.use(errorsHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      