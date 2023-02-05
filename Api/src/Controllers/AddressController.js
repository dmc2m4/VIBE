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

const deleteAddresses = async (value) => {
  await Address.destroy({ where: { value } });
}
//aca habria que pasarle el modelo entero por parametro, xq no tienen id
// y en este momento no se si seria para mas quilombo ponerle id a esta tabla

const putAddresses = async (value) => {
  await Address.update({ deletedAt: null }, { where: { value } });
};

module.exports = {
  createAddresses,
  deleteAddresses,
  putAddresses
};
