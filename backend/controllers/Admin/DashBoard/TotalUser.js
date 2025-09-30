const pool = require("../../../db");

const TotalUsers = async(req,res) => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM users");
        const userCount = result.rows[0].count; 
        return res.status(200).json({
            sucess: true,
            totalUsers: userCount
        });
    } catch (err) {
        // console.error("Error getting user count", err);
        return res.status(500).json({
            sucess: false,
            message: err.message,
            totalUsers: 0
        });
    }
}

module.exports = TotalUsers;