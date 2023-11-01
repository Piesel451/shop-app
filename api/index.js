const cors = require('cors');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;

const db = require('./dbConnection');
const productModel = require('./models/productModel');
const userModel = require('./models/userModel');
const cartModel = require('./models/cartModel');

const JWT_SECRET = 'Yd4#5aT!9HxK*uMvRjPqZs2v4y7z9B&E';

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Witaj na stronie głównej!');
});


app.get('/products', async (req, res) => {
  
  const { category, type } = req.query
  try {
    const products = await productModel.find({category: category, type: type}).lean();

    if (products.length === 0) {
      res.status(404).json({ error: "Brak produktów spełniających kryteria filtrowania." });
    } else {
      res.json(products);
    }   
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Zapytanie do bazy danych nie powiodło się." });
}

});

app.post('/addToCart', (req, res) => {

})

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

app.post('/addUser', async (req, res) => {
  const userData = req.body;

  const existingEmail = await userModel.findOne({email: userData.email}).lean();
  const existingUsername = await  userModel.findOne({username: userData.username}).lean();
  if (!existingEmail && !existingUsername) {
    if (!isValidEmail(userData.email)) {
      return res.status(400).json({ error: "Nieprawidłowy format adresu email" });
    }
  
    if (!isStrongPassword(userData.psw)) {
      return res.status(400).json({ error: "Zbyt słabe hasło" });
    }
  
    bcrypt.hash(userData.psw, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: 'Błąd hashowania hasła' });
      }
  
      const newUser = new userModel({
        email: userData.email,
        username: userData.username,
        password: hash,
      });
  
      newUser.save()
      .then((result) => {
        res.status(200).json({ message: 'Rejestracja przebiegła pomyślnie' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Błąd podczas rejestracji użytkownika' });
      });
    });
  } else {
    return res.status(400).json({ error: 'Ta nazwa użytkownika lub email już znajduje się w bazie danych' });
  }
});

//weryfikacja tokenu
function authorization(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return next();
  } catch {
    return res.sendStatus(403);
  }
}

app.post("/logoutUser", authorization,(req, res) => {

  try {
    res.clearCookie("access_token")
    res.status(200).json("Pomyślnie wylogowano");
  } catch (error) {
    res.status(500).json("Błąd wylogowywania: " + error.message);
  }
  
});

app.post('/logUser', async (req, res) => {
  const userData = req.body;
  const { email, psw } = userData;

  try {
    const user = await userModel.findOne({ email }).lean();

    if (!user) {
      return res.status(400).json({ error: 'Użytkownik nie znaleziony' });
    }
    const passwordMatch = await bcrypt.compare(psw, user.password);

    if (passwordMatch) {
      //JWT TOKEN
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' })

      return res.status(200).json({token})

    } else {
      res.status(401).json({ error: 'Niepoprawne hasło' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
})


app.post('/getCurrentUser', async (req, res) => {
  
  const { token } = req.body
  const decodedToken = jwt.verify(token, JWT_SECRET);
  const userId = decodedToken.userId

  const user = await userModel.findOne({ _id: userId }).lean();

  res.status(200).json(user);

});

// app.post('/getUserID', async (req, res) => {
  
//   const { token } = req.body
//   const decodedToken = jwt.verify(token, JWT_SECRET);
//   const userId = decodedToken.userId



//   res.status(200).json(userId);

// });

// app.post('/insertCartToDB', async (req, res) => {
  
//   const { products_id, user_id } = req.body;
//   console.log(user_id);
//   try {
//     const productsInCart = await productModel.find({_id: products_id}).lean();

//     if (productsInCart.length === 0) {
//       res.status(404).json({ error: "Brak produktów !" });
//     } else {
//       let userCart = await cartModel.findOne({ user: user_id });
//       if (userCart) {
        
//         userCart.items.push(...productsInCart);
//       } else {
        
//         const newCart = new cartModel({
//           user: user_id,
//           items: productsInCart,
//           total_price: 0,
//         });
//         try {
//           userCart = await newCart.save();
//           res.status(400).json("Dodano !" );
//         } catch (error) {
//           res.status(500).json(error);
//         }
  
        
//     }
//   }   
//   }catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Zapytanie do bazy danych nie powiodło się." });
// }
  

// });

app.listen(port, () => {
  console.log('Server Started, Port: ', port);
});
