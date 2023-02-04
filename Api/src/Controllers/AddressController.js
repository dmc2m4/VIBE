const { User, Address } = require("../db");

const createAddresses = async (value) => {
  const user = await User.findOne({
    where: {
      email: value.email,
    },
  });
  const address = await Address.create({
    street: value.street,
    number: value.number,
    zipCode: value.zipCode,
    province: value.province,
    location: value.location,
    apartment: value.apartment,
    description: value.description,
  });
  await user.addAddresses(address);
};

module.exports = {
  createAddresses,
};