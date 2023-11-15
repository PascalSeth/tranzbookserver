require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://tranzbook.vercel.app/',
  methods: ['POST', 'GET'],
  credentials: true,
}));
app.options('*', cors()); // Add this line to handle preflight requests for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://tranzbook.vercel.app/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true'); // Add this line
    next();
});


app.use(express.json());

const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

connection();

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to ${port}...`));



module.exports = app;
