const express = require("express");
const bodyParser = require("body-parser");

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
    })

    .post((req, res) => {
        const postTitle = req.body.postTitle;
        const postContent = req.body.postContent;
        const newPost = {
            title: postTitle.trim(),
            content: postContent
        };
        posts.push(newPost);
        res.redirect("/");
    });


app.route("/posts/:postTitle")

    .get((req, res) => {
       const post = posts.filter(post => {
            const rTitle = req.params.postTitle.replaceAll(" ", "-").trim();
            const pTitle = post.title.replaceAll(" ", "-");
            return pTitle === rTitle;
       });
        res.render("posts", {post: post[0]});
    })
;

app.listen(3000, () => {
    console.log("Server running on port 3000");
})