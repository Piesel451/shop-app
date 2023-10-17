const cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;

const products = [
  { id: 1, category: 'guitar', type: 'acoustic', name: 'Taylor 210ce', price: 2500 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },

  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },
  { id: 2, category: 'guitar', type: 'classic', name: 'Thomann Classic Guitar S 4/4', price: 800 },

  { id: 3, category: 'guitar', type: 'electric', name: 'Gitara3', price: 1200 },
  { id: 4, category: 'guitar', type: 'acoustic', name: 'Fender CD-60S', price: 1500 },
  { id: 5, category: 'guitar', type: 'classic', name: 'Yamaha CG122MC', price: 900 },
  { id: 6, category: 'guitar', type: 'electric', name: 'Gibson Les Paul Standard', price: 3000 },

  { id: 7, category: 'key_instrument', type: 'keyboard', name: 'Korg Krome', price: 2800 },
  { id: 8, category: 'key_instrument', type: 'synthesizer', name: 'Roland Juno-60', price: 1500 },
  { id: 9, category: 'key_instrument', type: 'electric_piano', name: 'Yamaha CP88', price: 2000 },
  { id: 10, category: 'key_instrument', type: 'keyboard', name: 'Roland RD-2000', price: 3200 },
  { id: 11, category: 'key_instrument', type: 'synthesizer', name: 'Korg Minilogue XD', price: 1100 },
  { id: 12, category: 'key_instrument', type: 'electric_piano', name: 'Yamaha P-125', price: 1800 },

  { id: 13, category: 'sound_equipment', type: 'processors', name: 'TC Electronic Helix', price: 1500 },
  { id: 14, category: 'sound_equipment', type: 'amplifier', name: 'Marshall JCM800', price: 2200 },
  { id: 15, category: 'sound_equipment', type: 'microphone', name: 'AKG C414', price: 1000 },
  { id: 16, category: 'sound_equipment', type: 'amplifier', name: 'Marshall JVM410H', price: 2500 },
  { id: 17, category: 'sound_equipment', type: 'microphone', name: 'Shure SM58', price: 150 },
  { id: 18, category: 'sound_equipment', type: 'processors', name: 'Behringer X32', price: 3000 },
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
  const { category, type } = req.query

  if(category && type){
    const filteredProducts = products.filter(products => products.category === category && products.type === type);
  
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
