const {User, Product, Basket, BasketProduct} = require("../models");

class BasketController {
    async addBasket(req, res) {
        try {
            const {userId, productId, count} = req.body
            if (!userId) { // Если пользователь не зарегистрирован,
                const user = await User.create({})
                const product = productChecker(productId)
                if(!product){
                    return res.status(400).json({
                        message: 'Не найдено такого товара',
                    })
                }
                const basket = Basket.create({userId: user.id})
                const basketProduct = BasketProduct.create({
                    basketId: basket.id,
                    productId: product.id,
                    count: 1
                })
                return res.json(user, product, basketProduct)
            }
            else{
                const user = await User.findOne({
                    where: {id: userId}
                })
                if(!user){
                    return res.status(400).json({
                        message: 'Нет такого пользователя',
                    })
                }
                const product = productChecker(productId)
                if(!product){
                    return res.status(400).json({
                        message: 'Не найдено такого товара',
                    })
                }
                console.log('product', product)
                console.log('userId', userId)
                console.log('Product', Product)
                console.log('Basket', Basket)
                const basket = await Basket.findOne({
                    where: {userId: userId}
                })
                console.log('basket', basket)
                const basketProduct = await BasketProduct.findOne({
                    where: {basketId: basket.id, productId}
                })
                if(basketProduct){
                    await basketProduct.update({count})
                }
                else{
                    await BasketProduct.create({
                        basketId: basket.id,
                        productId,
                        count
                    })
                }
                return res.json(user, product, basketProduct)
            }
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }
}


const productChecker = async (productId) => {
    try{
        const product = await Product.findOne(
            {where: {id: productId}}
        )
        if(product) return product
        return null
    }
    catch{
        return null
    }

}


module.exports = new BasketController()