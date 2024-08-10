const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
// const pool = require("./config/db");

app.use(cors());
app.use(express.json());

const server = http.createServer(app); 

dotenv.config();

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});