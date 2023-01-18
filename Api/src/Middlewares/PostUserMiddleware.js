const PUM = async function (req, res, next) {
  const searchingUser = await User.findAll({
    where: {
      email: value.email.toUpperCase(),
    },
  });
  if (searchingUser.length) throw new Error("this user already exist");
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  if (!regexEmail.test(value.email)) throw new Error("this is not an email");

  next();
};

module.exports = PUM;