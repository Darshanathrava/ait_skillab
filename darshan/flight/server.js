const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const flightController = require('./flightController');

const app = express();
const mongoURI = 'mongodb://localhost:27017/nithin_db';  // You can reuse same DB

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURI)
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.error(err));

// Routes
app.post('/flights', flightController.createFlight);
app.get('/flights', flightController.getAllFlights);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
