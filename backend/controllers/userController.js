require('dotenv').config()
const {check, validationResult} = require('express-validator'),
    jwt = require('jsonwebtoken'),
    hash_pas = require('bcryptjs'),
    {User, Basket} = require("../models");


class UserController {
    async getUser(req, res){
        try{
           const {id} = req.query
           const user = await User.findOne({where: {id}, attributes: ['id', 'email', 'bonusCount', 'name', 'surname', 'addresses'] })
            if (!user) {
                return res.status(400).json({
                    message: 'Нет такого пользователя!',
                })
            }
            return res.json(user)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }


    async registration(req, res) {
        try {
            let {email, password, repeatPassword} = req.body
            check(email, 'Некорректный email').isEmail()
            check(password, 'Минимальная длина пароля = 6 символов').isLength({min: 6})
            check(repeatPassword, 'Минимальная длина пароля = 6 символов').isLength({min: 6})
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }
            if (password !== repeatPassword) {
                return res.status(400).json({
                    message: 'Пароли не совпадают'
                })
            }
            let uniq = await User.findOne({where: {email} })
            if (uniq) {
                return res.status(400).json({
                    message: 'Пользователь с таким Email уже зарегистрирован',
                })
            }
            const hashPassword = await hash_pas.hash(password, 12)
            const user = await User.create({email, password: hashPassword})
            const basket = await Basket.create({
                userId: user.id
            })
            return res.json(user)
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    }

    async authorization(req, res) {
        try{
            let {email, password} = req.body
            check(email, 'Некорректный email').normalizeEmail().isEmail()
            check(password, 'Введите пароль!').exists()
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }
            const user = await User.findOne({where: {email} })
            if(!user){
                return res.status(400).json({
                    message: 'Пользователя с таким Email не зарегистрировано'
                })
            }
            const checkPas = await hash_pas.compare(password, user.password);
            if (!checkPas) {
                return res.status(400).json({
                    message: 'Пароль введён неверно!'
                })
            }
            const token = jwt.sign(
                {userId: user.id},
                process.env.SECRET_KEY,
                {expiresIn: '24h'}
            )
            res.json({'token': token, 'userId': user.id})
        }
        catch (e){
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new UserController()
