import express from "express";
import { engine } from "express-handlebars";
import yup from "yup";
const app = express();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/Terms", (req, res) => {
    res.render("Terms");
});

app.get("/return", (req, res) => {
    res.render("return");
});

app.get("/store", (req, res) => {
    res.render("storelocator");
});

app.get("/policy", (req, res) => {
    res.render("policy");
});
app.get("/pageindev", (req, res) => {
    res.render("pageindev");
});
app.get("/mycart", (req, res) => {
    res.render("mycart");
});
app.get("/moreitems", (req, res) => {
    res.render("moreitems");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/createacc", (req, res) => {
    res.render("createacc");
});
app.get("/aboutus", (req, res) => {
    res.render("aboutus");
});
app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});