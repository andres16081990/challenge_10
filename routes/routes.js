'use strict'

const router = require('express').Router();
const User = require('../models/models')

router.get('/', async (req,res)=>{
    try {
        const user = await User.find();
        res.status(200).render('index',({user}));        
    } catch (error) {
        console.log(error);
    }
})

router.get('/register',(req,res)=>{
    res.render('user_forms');
})

router.post('/register', async (req,res)=>{
    const {name, email, password}= req.body
    
    try {
        const user = await new User({name, email, password});
        await user.save();
        res.status(200).redirect('/');
        console.log(user.name.id)
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;