import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
const port = 3000

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

let conn = "mongodb://localhost:27017/usersprj"

const connected = async () => {

    await mongoose.connect(conn)
    console.log("CONNECTED TO DATABASE");
}
connected()
const MySchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model("Users", MySchema);

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
   try {
    const newUser = new User({ email, password });
    await newUser.save();

    // Always send a valid JSON object
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).send({ message: 'Error registering user', error: error.message });
  }
});
app.listen(port, () => {
    
    console.log(`Server is running on http://localhost:${port}`);
});
