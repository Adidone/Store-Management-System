const pool = require("../../db");

const UsersRated = async (req, res) => {    
    try {
        const {owner_id} = req.body;
        if(!owner_id){
            return res.status(400).json({
                success: false,
                message: "Please provide a owner ID"
            });
        }

        const storeQuery = 'SELECT id FROM stores WHERE owner_id = $1';
        const storeResult = await pool.query(storeQuery, [owner_id]);
        if (storeResult.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Store not found for the given owner ID"
            });
        }
        const store_id = storeResult.rows[0].id;    

        const query = `
        SELECT u.name, u.email, r.rating_value
        FROM users u
        JOIN ratings r ON u.id = r.user_id
        WHERE r.store_id = $1
        `;          
        const result = await pool.query(query,[store_id]);
        const users = result.rows;

        res.status(200).json({
            sucess: true,
            users: users
        });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            sucess: false,
            message: "Server error"
        });
    }
}

module.exports = UsersRated;    
        