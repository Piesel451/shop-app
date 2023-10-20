const cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;

const mongoose = require("mongoose")
const CONNECTION_STRING = "mongodb+srv://admin:123@cluster0.3ozufrb.mongodb.net/"

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true})
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}
module.exports = new Database();


const productSchema = new mongoose.Schema({
  category: String,
  type: String,
  price: Number
 });

const productModel =  mongoose.model("productModel", productSchema);

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Witaj na stronie głównej!');
});


app.get('/products', async (req, res) => {
  const { category, type } = req.query

  try {
    const products = await productModel.find(({category: category}, {type: type})).lean();
    console.log(products);
   
  }catch (error) {
    console.log(error)
}


  // productModel.find(({category: category}, {type: type}), (err, val) => {
  //   if(err){
  //     res.send("Błąd bazy danych!")
  //   }
  //   else{
  //     if(val.length == 0){
  //       res.send("Brak produktów odpowiadających tej kategori");
  //     }
  //     else{
  //       console.log(val)
  //       res.send(val);
  //     }
  //   }
  // })

  // if(category && type){
  //   const filteredProducts = products.filter(products => products.category === category && products.type === type);
  
  //   if (filteredProducts.length === 0) {
  //     res.status(404).json({ error: "Brak produktów spełniających kryteria filtrowania." });
  //   } else {
  //     res.json(filteredProducts);
  //   }
  // }
});


app.listen(port, () => {
  console.log('Server Started, Port: ', port);
});
