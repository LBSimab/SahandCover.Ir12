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


async function getProductByCode(rowCode){
  
    try {
   
    // Use parameterized query to prevent SQL injection
    const result = await pool.request()
      .input("rowCode", sql.VarChar, `%${rowCode}%`) // RowCode type might be different (e.g., sql.Int)
      .query(`
        SELECT TOP (10) [RowID]
              ,[RowCode]
              ,[RowName]
              ,[SalePrice]
              ,[IsActive]        
              ,[Warehouse_ID]
              ,[ConsumerPrice]
              FROM [RahkarPOSDB].[dbo].[Good] 
        WHERE RowCode LIKE @rowCode
      `);
        
    return result
  } catch (err) {
    console.error(err);
    return err;
  }




}
 
async function getWarehouse(Id){
    try {
   
    // Use parameterized query to prevent SQL injection
    const result = await pool.request()
      .input("Id", sql.VarChar, `${Id}`) // RowCode type might be different (e.g., sql.Int)
      .query(`
        SELECT TOP (1) [RowID]
      ,[Branch_ID]
      ,[RowName]
      ,[IsActive]
      ,[RowDesc]
      ,[UniqueIdentifierValue]
      ,[Company_ID]
      ,[IsSend]
  FROM [RahkarPOSDB].[dbo].[Warehouse] WHERE branchId = $Id

      `);

    return result
  } catch (err) {
    console.error(err);
    return err;
  }




}

module.exports = {getProductByCode,getWarehouse}
;
