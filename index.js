const express = require('express')
const app = express()
const port = 5000 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ham:1234@boilderplate.wowqh.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log("MongoDb Connected..."))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~안녕하세D요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})