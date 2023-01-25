const { Favorites } = require("../db");
const { User, Product } = require("../db");


// const getFavorites = async (user) => {

//     const findUser = await User.findOne({
//         where: {
//             email: user.email
//         }
//     });
//     const findFavoriteTable = await Favorites.findOne({
//         where: {
//             userId: findUser.id
//         },
//         include: {
//             model: Product
//         }
//     });
//     return findFavoriteTable
// }

const getFavorites = async (user) => {
    const findUser = await User.findOne({
        where: {
            email: user.email
        }
    });
    console.log(findUser);
    // const newFavorites = await Favorites.findOrCreate({
    //     where: {
    //         userId: findUser.id
    //     },
    //     default: {
    //         userId: findUser.id
    //     }
    // })
    const newFavorites = await Favorites.findAll()
    return newFavorites
} 
module.exports = {
 getFavorites,

}

