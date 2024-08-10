const { config } = require("dotenv");
const { Pool } = require("pg");
require("dotenv").config();
config();

const pool = new Pool({
  // user: "postgres",
  // password: "12345",
  // database: "chat-app-db",
  // host: "localhost",
  // port: 5432

  ssl: true,
  // connectionString: process.env.DATABASE_URL,
  connectionString: "postgresql://astroguide_user:lOcr2rBasdKMHh9QOATkuMaKLZpPdUjU@dpg-cqri4mg8fa8c73d4erd0-a.singapore-postgres.render.com/astroguide",
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
    process.exit(1); // Exit the application on connection error
  });

const createTablesQuery = 
``;

pool
  .query(createTablesQuery)
  .then(() => {
    console.log("Tables successfully created or already exist.");
  })
  .catch((err) => {
    console.error("Error creating tables:", err.message);
  });

module.exports = pool;
