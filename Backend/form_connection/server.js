const express = require('express');
const app = express();
const cors = require('cors');

// to used the middlesware
app.use(cors());
app.use(express.json());

//post the data

app.get('/', (req, res) => {
  res.send('Backend Working');
});

app.post('/register', (req, res) => {
  console.log('POST request received');

  const { name, email } = req.body;

  console.log('Name', name);
  console.log('Email', email);

  res.json({
    success: true,
    message: 'Registration Successfully',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
