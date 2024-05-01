const router = require('express').Router();
const { User } = require('../models/User');

router.get('/users', async (req, res) => {
    const users = await User.find();
    res.render('users', { users });
});

router.post('/users', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.redirect('/users');
    } catch (error) {
        console.error(error);
    }
});

router.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('edit', { user });
});

router.put('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/users');
    } catch (error) {
        console.error(error);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.redirect('/users');
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
