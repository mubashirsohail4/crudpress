import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import article from "./article.js"; // Importing the article model

dotenv.config();

const app = express();
const port = 3000;
const __dirname = path.resolve();
const mongodbURI = process.env.MONGODB_URI;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware: Method Override to get put, patch and delete request from html
app.use(methodOverride("_method"));

// Middleware: Path for static files in public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware: bodyParser to get form values form html
app.use(bodyParser.urlencoded({ extended: true }));

var articleTitles = [];
var articleContents = [];

try {
  await mongoose.connect(mongodbURI, {
    dbName: "crudpress", // Explicitly specify database
  });
  console.log("MongoDB connected successfully");
  const articles = await article.find();
  console.log(articles);
} catch (error) {
  console.log(error);
}

// Root directory request
app.get("/", async (req, res) => {
  res.render("home.ejs");
});

// Compose page request
app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

// Articles page request
app.get("/articles", (req, res) => {
  res.render("articles.ejs", {
    articleTitles: articleTitles,
    articleContents: articleContents,
  });
});

// Publish article request
app.post("/publish", (req, res) => {
  if (articleTitles.length >= 29) {
    articleTitles.splice(29, 1);
    articleContents.splice(29, 1);
  }

  articleTitles.push(req.body.title);
  articleContents.push(req.body.content);
  res.render("published.ejs");
});

// View article request
app.get("/articles/:id", (req, res) => {
  let index = req.params.id;
  res.render("article.ejs", {
    index: index,
    title: articleTitles[index],
    content: articleContents[index],
  });
});

// Edit article compose page request
app.get("/compose/:id", (req, res) => {
  const index = req.params.id;

  res.render("compose.ejs", {
    index: index,
    title: articleTitles[index],
    content: articleContents[index],
  });
});

// Edit article request
app.put("/publish/:id", (req, res) => {
  const index = req.params.id;

  articleTitles[index] = req.body.title;
  articleContents[index] = req.body.content;

  res.render("published.ejs");
});

// Delete article request
app.delete("/delete/:id", (req, res) => {
  const index = req.params.id;

  // Remove article from array
  articleTitles.splice(index, 1);
  articleContents.splice(index, 1);

  res.redirect("/articles");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
