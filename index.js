//This is Start File
const mongoose = require("mongoose");
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const blog = require("./routes/blog");
app.use("/api/v1", blog);


app.listen( PORT, () => {
    console.log(`App running successfully at ${PORT}`);
})

mongoose.connect( process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log("Db Connection Successfully"))
.catch( (error) => {
    console.log("Issue in DB Connection");
    console.error(error.message);
    process.exit(1);
})

app.get("/", (req,res) => {
    res.send(`<h1>  This is Blogpage</h1>`)
})
