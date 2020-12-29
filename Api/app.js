var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
var cors = require('cors')
//var indexRouter = require('./routes/index');
//  var usersRouter = require('./routes/users');
//  var serialRouter = require('./routes/serial');

var app = express();


// app.listen('5000', (err)=>{
//   if(err){
//     console.log("An error occured while turning on Node server");
//   }
//   else{
//     console.log("Node server running on Port 5000");
//   }
// })
//Passport Config
require('./config/passport')(passport);

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const AuthRoute = require('./routes/auth')
app.use('/api', AuthRoute)



app.listen('5000', (err) => {
  if (err) {
    console.log("An error occured while turning on Node server");
  }
  else {
    console.log("Node server running on Port 5000");
  }
})
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
// app.use('/serial', serialRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// var users = [
//   {
//     email:"abc@gmail.com",
//     password:"123"
//   }

// ]
// app.get('/login',function(req,res){
//   res.send("i am called from node");
//   console.log("i am called from node");
// });


// app.post('/login',function(req,res){
// console.log("someone requested");
// // let email = req.body.email;
// // let password = req.body.password;
// // console.log(email);
// let name = req.body.email;

// let query = mongoose.findOne({'name': {name}});
// query.exec(function(err,data){
//   if(err){
//     console.log("An error has occured while executing a query");
//   }
//   else{
//     if (data == req.body.email){
//       console.log("successfully found the email");

//     }
//     console.log("it looks like we didnt get the expected result from db query",data);
//   }

// });
//   //let result = users.find(user=> user.email == req.body.email);
//   // if(result){
//   //   if(result.password == req.body.password){
//   //     res.status(200).send({
//   //       message:"Successfull login "
//   //     })
//   //   }
//   //     else{
//   //       res.status(200).send({
//   //         message:"password incorrect"
//   //       })
//   //     }
//   //   }
//   //   else{
//   //     res.status(200).send({
//   //       message:"no user found!!"
//   //     })
//   //   }

// });

// app.get('/login',function(req,res){
//   console.log("main route requested");
//   res.json({
//     message:"Taiba is the best junior I have ever had!!! "
//   })
//   //let view = __dirname+
//   //res.send(__dirname+);
// });

module.exports = app;
