const express = require('express');
const app = express();
//1st route -- home 
app.get('/', (req, res) => {
  console.log('Home page ');
});

// 2nd route 

app.get('/menu',()=>{
    console.log("Menu page ")
})
// 3rd route 
app.get('/order', ()=>{
    console.log("Order has been placed ")
})

// start the server at 3000
// note :- info about localhost runs is not in the package file it in the computer os 
// either localhost or http://127.0.0.1:3000 -- 


app.listen(3000, () => {
  console.log('data center is ON ');
});
// npx nodemon dataCenter.js
