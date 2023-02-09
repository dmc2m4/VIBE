const { User, Address } = require("../db");

const createAddresses = async (value) => {
  const user = await User.findOne({
    where: {
      email: value.email,
    },
  });
  const address = await Address.create({
    street: value.street,
    number: parseInt(value.number),
    zipCode: value.zipCode,
    province: value.province,
    location: value.location,
    apartment: value.apartment,
    description: value.description,
  });
  await user.addAddresses(address);
};

const destroyAddresses = async (id) => {
  await Address.destroy({
    where: {
      id: id,
    },
  });
};

/* const putAddresses = async (value) => {
  const {
    id,
    street,
    number,
    zipCode,
    province,
    location,
    apartment,
    description,
  } = value;
  const update = await Address.findByPk(id);
  if (street) update.street = street;
  if (number) update.number = number;
  if (zipCode) update.zipCode = zipCode;
  if (province) update.province = province;
  if (location) update.location = location;
  if (apartment) update.apartment = apartment;
  if (description) update.description = description;

  await update.save();
}; */

module.exports = {
  createAddresses,
  destroyAddresses,
/*   putAddresses,
 */};
