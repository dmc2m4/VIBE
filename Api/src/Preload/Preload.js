const { User } = require("../db.js");

async function AdminUsers() {
  await User.findOrCreate({
    where: {
      email: "santiagoterandc@gmail.com",
    },
    defaults: {
      name: "Santiago Teran",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "danielmartinez2m4@gmail.com",
    },
    defaults: {
      name: "Daniel Martinez",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "tomasalejandroalcaraz@gmail.com",
    },
    defaults: {
      name: "Tomas Alcaraz",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "brianpolicani@gmail.com",
    },
    defaults: {
      name: "Brian Policani",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "vles2345@gmail.com",
    },
    defaults: {
      name: "Valentino Villar",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "godino290@gmail.com",
    },
    defaults: {
      name: "Ramiro Soares",
      isAdmin: true,
    },
  });

  await User.findOrCreate({
    where: {
      email: "16-00436@usb.ve",
    },
    defaults: {
      name: "Josue Alfonzo",
      isAdmin: true,
    },
  });
}

module.exports = AdminUsers;
