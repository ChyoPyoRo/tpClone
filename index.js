const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://user1:abcd1234@cluster0.b4grj.mongodb.net/Cluster0?retryWrites=true&w=majority',{

}).then(() => console.log('몽고DB 연결 완료'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  