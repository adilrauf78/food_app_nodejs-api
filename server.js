const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const conncetDatabase = require('./config/database');

//dotenv congiguration
dotenv.config();

//connection
conncetDatabase();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 8000;

//routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/resturant', require('./routes/resturantRoutes'));
//app.use('api/v1/test', require(''));
app.get('/test1', (req, res) => {
    res.status(200).send('Server is working!')
});


//listen

app.listen(PORT, () => {
console.log(`Server is Working ${PORT}`.bgMagenta);
})
