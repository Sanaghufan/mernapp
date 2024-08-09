const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
mongoDB();
app.use(express.json());
const cors = require('cors');


app.use(cors({
  origin: 'http://localhost:3000', // or '*' to allow all origins
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})