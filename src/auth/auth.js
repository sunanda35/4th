const router = require('express').Router();
const User = require('../auth/user');

router.post('/api/login', async (req, res)=>{
    const emailThere = await User.findOne({email: req.body.email})
    const passwordMatch = await User.findOne({password: req.body.password})
    if(!emailThere) return res.status(400).json({
        status: 400,
        message: 'Email not found',
    })
    if(!passwordMatch) return res.status(400).json({
        status: 400,
        message: `Password didn\'t match!`
    })
    res.json({
        status: 200,
        message: `You have successfully logged in!`
    })
})

module.exports = router;