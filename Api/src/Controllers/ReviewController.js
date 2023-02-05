const { Product, Review, User } = require("../db.js");

const postReview = async (value) => {
    const product = await Product.findOne({
        where: {
            id : value.id
        }
    })
    const user = await User.findOne({
        where: {
            email: value.email
        }
    })

    const newReview = await Review.create({
        rating: value.rating,
        title: value.title,
        text: value.text,
    })

    await product.addReviews(newReview)
    await user.addReviews(newReview)

    return newReview
}

module.exports = {
    postReview
}