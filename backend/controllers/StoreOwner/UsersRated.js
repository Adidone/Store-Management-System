const pool = require("../../db");

const UsersRated = async (req, res) => {    
    try {
        const {store_id} = req.body;
        if(!store_id){
            return res.status(400).json({
                success: false,
                message: "Please provide a store ID"
            });
        }
        const query = `
        SELECT u.name, u.email, r.rating_value
        FROM users u
        JOIN ratings r ON u.id = r.user_id
        WHERE r.store_id = $1
        `;          
        const result = await pool.query(query,[store_id]);
        const users = result.rows;

        res.status(200).json({
            success: true,
            users: users
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

module.exports = UsersRated;    
        