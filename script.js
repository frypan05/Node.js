//we take all the powers of express package/framework by the require method.
//then we put it into a constant express.

const express = require("express")

//now we take all the powers that Express has in the constant express and put it into a constant app.
const app = express()

//middleware
//it always works before every route
// the next(); function give the request a push from the middleware bucket

app.use(function (req, res, next) {
    console.log("hello from middleware");
    next();
});

// we  can make n number of middlewares

app.use(function (req, res, next) {
    console.log("hello from middleware 2");
    next();
});


//app.get(route,function)
//here get is the GET Route,
//route is the actual route, here route is '/'
//req is request
//res is response

app.get('/', function (req,res) {
    res.send('Hello World hi hih');
});

app.get('/profile', function (req, res) {
    res.send('Hellow from the profile route');
});
app.listen(3000)


//this above line of code is for the server to listen.
//where is the server? THIS WHOLE CODE IS ON THE SERVER
//when the server runs this code, it will run on the port 3000.