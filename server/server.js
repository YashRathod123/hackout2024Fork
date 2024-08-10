const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");
const routes  = require("./Routes/routes");

app.use(cors());
app.use(express.json());



dotenv.config();

app.use('/api',routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});