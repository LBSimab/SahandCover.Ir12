const { getPool, sql } = require("./db.js");

let pool

(async () => {
  try {
   pool= await getPool();
    console.log("🚀 DB ready");
  } catch (err) {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  }
})();

async function getUser(username){

}