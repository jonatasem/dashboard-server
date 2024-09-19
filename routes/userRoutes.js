const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Rota para criar um novo usuário
router.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para obter todos os usuários
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Email ou senha inválidos' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erro ao processar a requisição' });
    }
});

module.exports = router;