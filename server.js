const express = require('express');
const connectDB = require('./DB/Conncection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));
