const mongoose = require("mongoose")

const CONNECTION_STRING = "mongodb+srv://admin:123@cluster0.3ozufrb.mongodb.net/shop-app"

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}
module.exports = new Database();