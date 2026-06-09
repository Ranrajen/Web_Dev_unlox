//rules to write  tthe code
// step--1 ---
// 1) -- import the required module
// use the required = () methode

// use required ("Module name ") methode to import module

// 2) ==> require()
const express = require('express');

//in build  express function to create the appliication which is inside express module
const app = express(); // this has all fucntion to build api

// step 3--

// define routes api endpoints

// use the app. methode name  (path , module )
// get methode gets the data form backend/server
app.get('/login', (req, res) => {
  res.send('procedd to login');
});

app.get('/signup', (req, res) => {
  res.send('Sign up to plateform ');
});

// step 4 - strat server
// port -- poort is like address on internet which acts like my backend , so that frontend can communicte
// free port no . -- 3000,5000, 8000,-- which used this

// syntax to
// start server -- app.listen(port , fucntion)

app.listen(8000, () => {
  console.log('The server on port 8000 http://localhost:8000');
});



// npm init -y

 

// npm install moduleName

 

// Step1 : import modules

// require('moduleName')

 

// Step 2 : Express App - express()

 

// Step3 : API

// app.methodName('/Address',(req,res)=<{

 

// })

 

// Step 4: Server

 

// app.listen(PORT)




