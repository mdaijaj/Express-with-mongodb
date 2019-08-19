// Import express
let express = require('express')
let bodyParser = require('body-parser');

// Import Mongoose
let mongoose = require('mongoose');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("/home/aijaj/Desktop/project/api with mongodb/api_routes.js")

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port= 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes, (req,res)=>{
    res.send({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Launch app to listen to specified
app.listen(port, ()=> {
     console.log("Running RestHub on port:" + port);
});
