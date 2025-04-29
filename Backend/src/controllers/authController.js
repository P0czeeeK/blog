const User = require("../models/User"); 
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt"); 

exports.register = async (req, res) => { 
 try { 
    const { username, email, password, name, surname, birthDate } = req.body; 
    const user = await User.create({ username, email, password, name, surname, birthDate }); 
    res.status(201).json({ message: "Użytkownik zarejestrowany" }); 
 } catch (error) { 
    res.status(400).json({ error: "Błąd rejestracji" }); 
 } 
}; 

exports.login = async (req, res) => { 
try { 
  const { email, password } = req.body; 
  const user = await User.findOne({ email }); 
  if (!user || !(await bcrypt.compare(password, user.password))) { 
 return res.status(401).json({ error: "Nieprawidłowe dane logowania" }); 
      } 
 const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" }); 
    res.json({ token }); 
} catch (error) { 
    res.status(400).json({ error: "Błąd logowania" }); 
 } 
};