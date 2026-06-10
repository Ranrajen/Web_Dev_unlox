const express = require('express');
const app = express();

// middleware -- security check
app.use(express.json()); // standared format of the json

//API / route / url
//get the data form server
// to show it on frontend

app.get('/restraunts', (req, res) => {
  res.json({ restrauntName: 'Mcdonalds' });
});

/// place an order
//post method
// send the data to server

// app.post('/order', (req, res) => {
//     res.send(`order placced successfully ${ JSON.stringify(req.body)}`)
// });


app.post('/order', (req, res) => {
    console.log(req.body); // 

    res.send(`order placed successfully ${JSON.stringify(req.body)}`);
});


app.listen(3000, () => {
  console.log('Server Runninng on http://localhost3000');
});



// next topic 
// --cors
// cross origin resouce sharing 
//  ft -- 5147
//  bk-- 3000
// cors is exxternal module