const { User: UserModel } = require("../models/User");

const userController = {
    createUser: async(req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const response = await UserModel.create(user);
            res.status(201).json({response, msg: "Usuário criado com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    getAllUsers: async(req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
        }
    },
    getUser: async(req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (!user) {
                res.status(404).json({msg: "Nenhum usuário encontrado!"});
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            if (!user) {
                res.status(404).json({msg: "Nenhum usuário encontrado!"});
                return;
            }
            res.status(200).json({msg: "Usuário deletado com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        const id = req.params.id;

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        const updateUser = await UserModel.findByIdAndUpdate(id, user);

        if (!updateUser) {
            res.status(404).json({msg: "Usuário não encontrado!"});
            return;
        }

        res.status(200).json({user, msg: "Usuário atualizado com sucesso!"});
    }
};

module.exports = userController;
