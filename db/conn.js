require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const mongoose = require('mongoose');
const pass = process.env.MONGODB_PASS;

async function main() {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(`mongodb+srv://hygorrasec:${pass}@cluster0.euxacbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(' - Connected to MongoDB');
    } catch (error) {
        console.log(' - Error connecting to MongoDB - Error: ', error);
    }
}

module.exports = main;
