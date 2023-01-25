const { User, Product, Favorites } = require("../db");

const postFavorites = async (value) => {
    const findUser = await User.findOne({
        where: {
            email: value.email
        }
    });

    // const findProduct = await Product.findByPk(value.id)
    const findProduct = await Product.findByPk(value.id)

    await findUser.addFavorites(findProduct);

    
   
}
module.exports = {
 postFavorites,
}

