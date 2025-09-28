const pool = require("../../../db");


const ShowUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT name, email, address, role FROM users");
        const users = result.rows;

        res.status(200).json({
            success: true,
            users: users
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = ShowUsers; 