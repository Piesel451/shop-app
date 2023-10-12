const corsOptions = {
  origin: 'http://localhost:4200',
};

const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 8080;


const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
];


app.use(cors(corsOptions));
app.use(express.json());


app.get('/api/users', (req, res) => {
  res.json(users);
});


app.post('/api/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log('Server Started, Port', port);
});