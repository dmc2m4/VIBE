const { mercadopago } = require("../Utils/mercadoPago");

const payProduct = async (data) => {
  //  const product = await Product.findById(id);
  let preference = {
    transaction_amount: parseInt(data.Cart.total * 1.15), //monto de la transacción
    net_amount: parseInt(data.Cart.total * 1.15 * 0.968 - 800), //monto neto que nos quedaremos
    taxes: [
      {
        value:
          parseInt(data.Cart.total * 1.15) - parseInt(data.Cart.total * 1.15),
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
    items: data.Cart.items.map((e) => {
      let newItem = {
        picture_url: e.img,
        title: e.name,
        unit_price: parseInt(e.cost * 1.15),
        quantity: 1,
        description: e.textdescription,
      };
      return newItem;
    }),
    //[
    //   {
    //     picture_url: data.picture_url,
    //     title: Product.name,
    //     unite_price: parseInt(data.Cart.total * 1.15),
    //     quantity: 1,
    //     description: Product.textdescription[0],
    //   },
    // ],
    back_urls: {
      success: "http://localhost:5173/home",
      failure: "http://localhost:5173/home",
      pending: "http://localhost:5173/home",
    },
    auto_return: "approved",
  };
  const mp = mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return {
        global: response.body.id,
      };
    })
    .catch(function (err) {
      return { err: err };
    });
  return mp;
};

module.exports = { payProduct };
