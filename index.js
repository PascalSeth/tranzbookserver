require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

connection();
app.use(cors({
  // origin: 'https://tranzbook-p619g7n5q-pascal-s-projects-c7de1887.vercel.app',
  // methods: ['POST', 'GET'],
  // credentials: true,
}));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to ${port}...`));



module.exports = app;
