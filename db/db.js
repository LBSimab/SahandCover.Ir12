require('dotenv').config()


const sql = require("mssql");

const config = {
  user: process.env.DBUID,
  password: process.env.DBPASS,
  database: process.env.DBDatabase,
  server: process.env.DBSERVER,
  port: 1433,

  options: {
    encrypt: false,              // true for Azure SQL
    trustServerCertificate: true // local dev
  },

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

let pool;

/**
 * Returns a singleton SQL Server connection pool
 */
async function getPool() {
  if (!pool) {
    pool = await sql.connect(config);
    console.log("✅ Connected to SQL Server");
  }
  return pool;
}

module.exports = {
  sql,
  getPool
};