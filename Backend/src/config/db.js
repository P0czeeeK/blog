const mongoose = require("mongoose"); 

const connectDB = async () => { 
 try{ 
  await mongoose.connect(process.env.MONGO_URI) 
  console.log("Połączono z bazą"); 
 } 
 catch (err) { 
  console.log("Błąd łączenia z bazą: ", err.message); 
  process.exit(1); 
 } 
}; 

module.exports = connectDB;