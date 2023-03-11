const express = require('express')
const app = express()
const cors = require('cors')



const port = 3000


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  const all = req.body
  console.log(all);
  res.send('first page')
  // res.json({name:name,id:id})
})


app.post('/something', (req, res) => {
  const all = req.body
  res.status(200).json(all)
    

//   console.log({name:name,id:id,value:value})
})

app.get('/test', (req, res) => {
  const name= req.query.name
  const id= req.query.id
  console.log(`name:${name} , id:${id}`);
  res.status(200).json(`{name:${name} , id:${id}}`)
  // res.json({name:name,id:id})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app