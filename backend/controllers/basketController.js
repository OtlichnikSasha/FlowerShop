const {User, Product, Basket, BasketProduct, FavoriteProduct, Photo} = require("../models");

class BasketController {
    async getBasket(req, res){
        const {userId} = req.query
        try{
            const user = await User.findOne({
                where: {id: userId},
                include: [{model: Basket}]
            })
            console.log('user', JSON.stringify(user))
            if(!user){
                return res.status(400).json({
                    message: 'Нет такого пользователя',
                })
            }
            const products = await BasketProduct.findAll({
                where: {basketId: user.basket.id},
                attributes: ['productId'],
                include: [
                    {model: Product, include: [
                            {model: Photo, as: 'photos', attributes: ['src']},
                            {model: FavoriteProduct, attributes: ['productId']},
                            {model: BasketProduct}
                        ]}
                ],
            })
            return res.json(products)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }


    async addBasket(req, res) {
        const {userId, productId, count} = req.body
        try {
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
                const basket = await Basket.findOne({
                    where: {userId: userId}
                })
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


    async removeBasket (req, res){
        const {userId, productId} = req.query
        try{
            const user = await User.findOne({
                where: {id: userId},
                include: [{model: Basket}]
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
            console.log('user.basket.id', user.basket.id, productId)
            const basketProduct = await BasketProduct.findOne({
                where: {basketId: user.basket.id, productId}
            })
            console.log('basketProduct', basketProduct)
            await basketProduct.destroy()
            return res.json({})
        }
        catch(e){
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