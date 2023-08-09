const express = require("express");
const bodyParser = require("body-parser")

const app = express();


const posts = [];


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.route("/")
    .get((req, res) => {
        res.render("index", {posts: posts});
    });

app.route("/createPost")
    .get((req, res) => {
        res.render("createPost");
    });


app.listen(3000, () => {
    console.log("Server running on port 3000");
})