const {User} = require('../db.js')

async function AdminUsers (next){
  try {
        const user = await User.findOne()
      if(!user){
        await User.create({
        name: 'Santiago Teran',
        email: "santiagoterandc@gmail.com",
        isAdmin: true,

        });
        await User.create({
        name: 'Daniel Martinez',
        email: "danielmartinez2m4@gmail.com",
        isAdmin: true,
        
        });
        await User.create({
        name: 'Tomas Alcaraz',
        email: "tomasalejandroalcaraz@gmail.com",
        isAdmin: true,    
        });

        await User.create({
        name: 'Brian Policani',
        email: "brianpolicani@gmail.com",
        isAdmin: true,    
        });

        await User.create({
        name: 'Valentino Villar',
        email: "vles2345@gmail.com",
        isAdmin: true,    
        });

        await User.create({
        name: 'Ramiro Soares',
        email: "godino290@gmail.com",
        isAdmin: true,    
        });

        await User.create({
        name: 'Josue Alfonzo',
        email: "16-00436@usb.ve",
        isAdmin: true,    
        });
      }
    } catch (error) {
        next(error)
    }
}

module.exports = AdminUsers;