const mercadopago = require("mercadopago")
require("dotenv").config();
const {ACCESS_TOKEN} = require("../../config.js")

mercadopago.configure({
  access_token: ACCESS_TOKEN
})

module.exports ={
  mercadopago
}
