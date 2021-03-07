const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware


//connect to mongodb
const connectionString = 'mongodb+srv://jiaju:snowmanpursuit@cluster0.8ci8h.mongodb.net/myFirstDatabase?retryWrites=true'

const mongoose = require('mongoose');
const roomRouter = require('./room.route');
const userRouter = require('./user.route');

const port = 5000;

app.use(express.json());
app.use('/room', roomRouter);
app.use('/user', userRouter);


mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
