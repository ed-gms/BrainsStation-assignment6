const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const fs = require('fs')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

// let cart = {
//   ed: [
//     { item: 'item1' },
//   ]
// }

let cart =[]

fs.readFile('cart.json', (err, data) => {
  if (data) {
    cart = JSON.parse(data)
  }
})

//return data
app.get('/cart/:username', (req, res) => {
  console.log(cart)
  console.log(req.params)
  
  let { username } = req.params
  let cartItems = cart
  if (cartItems) res.json(cartItems)
  else res.json({ status: 'error', error: `User ${username} not found` })
})

//save data
app.post('/cart', (req, res) => {
  let username = req.body.username
  let newItems = req.body.cart

  cart[username] = newItems

  fs.writeFile('cart.json', JSON.stringify(cart))
  res.json({ success: true })
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
