require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectDB = require("./database/db");

const app = express();
const port = process.env.PORT;

connectDB();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
