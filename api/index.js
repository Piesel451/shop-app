const cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;

const products = [
  { id: 1, category:'acoustic', name: 'Gitara1' },
  { id: 2, category:'classic', name: 'Gitara2' },
  { id: 3, category:'electric', name: 'Gitara3' },
];

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Witaj na stronie głównej!');
});


app.get('/products', (req, res) => {
  const { category } = req.query

  if(category){
    const filteredProducts = products.filter(products => products.category === category);
  
    if (filteredProducts.length === 0) {
      res.status(404).json({ error: "Brak produktów spełniających kryteria filtrowania." });
    } else {
      res.json(filteredProducts);
    }
  }
});


app.listen(port, () => {
  console.log('Server Started, Port: ', port);
});
