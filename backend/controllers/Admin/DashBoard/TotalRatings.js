const pool = require("../../../db");


const TotalRatings = async(req,res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM ratings");
        const ratingCount = result.rows[0].count; // Access the count value
        
        // console.log(`Total number of users: ${userCount}`);
        return res.status(200).json({
            sucess: true,
            totalRatings: ratingCount
        });
    } catch (err) {
        // console.error("Error getting user count", err);
        return res.status(500).json({
            sucess: false,
            message: "Server error",
            totalRatings: 0
        });
    }
}

module.exports = TotalRatings;