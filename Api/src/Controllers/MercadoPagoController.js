const { mercadopago } = require("../Utils/mercadoPago");
const {Product} = require("../db");


const payProduct = async (id, data) => {

  const product = await Product.findById(id);
  let preference = {
    transaction_amount: parseInt(product.cost * 1.15), //monto de la transacción
    net_amount: parseInt(product.cost * 1.15 * 0.968 - 800), //monto neto que nos quedaremos
    taxes: [
      {
        value:
          parseInt(product.cost * 1.15) -
          parseInt(product.cost * 1.15),
        type: "IVA",
      },
    ], //impuestos
    binary_mode: true,
    payer: {
      //el cliente y los data del mismo
      name: data.name,
      surname: data.surname,
      email: data.email,
      phone: {
        number: parseInt(data.telephone),
        area_code: "54",
      },
      adresss: {
        zip_code: data.zip_code,
        street_name: data.street_name,
        street_number: parseInt(data.street_number),
      },
    },
    shipments: {
      zip_code: data.zp_code,
      street_name: data.street_name,
      street_number: parseInt(data.street_number),
      floor: data.floor,
      apartament: data.apartament,
      city_name: data.city_name,
      state_name: data.state_name,
      country_name: data.country_name,
    },
    additional_info: data.additional_info,
    items: [
      {
        picture_url: data.picture_url,
        title: Product.name,
        unite_price: parseInt(Product.cost * 1.15),
        quantity: 1,
        description: Product.textdescription[0],
      },
    ],
    back_urls: {
      success: "http://localhost:5173/success",
      failure: "http://localhost:5173/failure",
      pending: "http://localhost:5173/pending",
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(response);
      res.json({
        global: response.body.id,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports ={ payProduct}
