const jwt = require("jsonwebtoken"); 
require("dotenv").config(); 

module.exports = (req, res, next) => { 
const token = req.header("Authorization"); 
if (!token) return res.status(401).json({ error: "Brak tokena" }); 

try { 
 	tokenWithoutBearer = token.replace("Bearer ", ""); 
 	const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET); 
 	req.user = decoded; 
 	next(); 
} catch (error) { 
 res.status(401).json({ error: "Nieprawidłowy token" });
 } 
};