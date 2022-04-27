require('dotenv').config()
const {check, validationResult} = require('express-validator'),
    jwt = require('jsonwebtoken'),
    hash_pas = require('bcryptjs'),
    {User} = require("../models");


class UserController {
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
                    status: 'error',
                    message: 'Некорректные данные'
                })
            }
            if (password !== repeatPassword) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Пароли не совпадают'
                })
            }
            let uniq = await User.findOne({where: {email} })
            if (uniq) {
                return res.status(400).json({
                    message: 'Пользователь с таким Email уже зарегистрирован',
                    status: 'error'
                })
            }
            const hashPassword = await hash_pas.hash(password, 12)
            console.log('hashPassword', hashPassword)
            const user = await User.create({email, password: hashPassword})
            return res.json(user)
        } catch (e) {
            console.log('e')
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
                    status: 'error',
                    message: 'Некорректные данные'
                })
            }
            const user = await User.findOne({where: {email} })
            if(!user){
                return res.status(400).json({
                    status: 'error',
                    message: 'Пользователя с таким Email не зарегистрировано'
                })
            }
            const checkPas = await hash_pas.compare(password, user.password);
            if (!checkPas) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Пароль введён неверно!'
                })
            }
            const token = jwt.sign(
                {user: user},
                process.env.SECRET_KEY,
                {expiresIn: '24h'}
            )
            res.json({'token': token, 'user': user})
        }
        catch (e){
            return res.status(500).json({message: e.message, status: 'error'})
        }
    }
}

module.exports = new UserController()
