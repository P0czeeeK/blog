require("dotenv").config(); 
const express = require("express"); 
const connectDB = require("./config/db"); 
const commentRoutes = require("./routes/commentRoutes");
const authRoutes = require("./routes/authRoutes"); 
const postRoutes = require("./routes/postRoutes");
const cors = require("cors"); 
const morgan = require("morgan"); 
const fs = require("fs"); 
const path = require("path"); 

const app = express(); 
app.use(cors({ origin: "http://localhost:5000", methods: "GET,POST,PUT,DELETE", })); 
app.use(express.json()); 
app.use(morgan("dev")); 

connectDB(); 

const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" }); 

app.use(morgan("combined", { stream: logStream })); 

app.use("/api/auth", authRoutes); 
app.use("/api/posts", postRoutes); 
app.use("/api/comments", commentRoutes);
 
const PORT = process.env.PORT; 
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`));