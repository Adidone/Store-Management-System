const pool = require("../../../db");

const TotalStores = async(req,res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM stores");
        const storeCount = result.rows[0].count; 
        return res.status(200).json({
            sucess: true,
            totalStores: storeCount
        });
    } catch (err) {
        return res.status(500).json({
            sucess: false,
            message: "Server error",
            totalStores: 0
        });
    }
}

module.exports = TotalStores;