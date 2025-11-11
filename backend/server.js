import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const port = 3000

let conn = "mongodb://localhost:27017//usersprj"

const connected = async () => {

    await mongoose.connect(conn)
    console.log("CONNECTED TO DATABASE");
}
const MySchema = new mongoose.Schema({
    email: {
        string,
        unique: true,
        required: true
    },

    password: {
        string,
        required: true,
        unique: true
    }
})

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).send('User registered successfully');
    }   catch(error){
        res.status(500).send('Error registering user');
    }   
})
