const { User } = require("../db");

const PUM = async function (req, res, next) {
  const { email, } = req.body;
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  const searchingUser = await User.findAll({
    where: {
      email: email.toLowerCase(),
    },
  });
  if (searchingUser.length) {
    res.status(400).send("this user already exist");
  } else if (!regexEmail.test(email)) {
    res.status(400).send("this is not an email");
  } else {
    next();
  }
};

module.exports = PUM;
