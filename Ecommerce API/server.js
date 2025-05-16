// reset dependencies
const express= require('express');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');

// reset dotenv
dotenv.config();


// reset app
const app =express();

// reset port
const port = process.env.PORT || 5000;

// reset middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));

// reset Router
app.use('/api/v1/test', require('./routes/testRoutes'));
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

// reset server
app.listen(port, () => {
    console.log(`APP LISTENING ON PORT ${port}  `.bgYellow.white.bold);
})

