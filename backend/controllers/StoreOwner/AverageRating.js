const pool = require("../../db");

const AverageRating = async (req, res) => {
    try {
        const {store_id} = req.body;    
        if (!store_id) {
            return res.status(400).json({
                success: false,
                message: "Please provide a store ID"
            });
        }

        const query = `
        SELECT 
            ROUND(AVG(rating_value), 2) AS average_rating
        FROM 
            ratings
        WHERE 
            store_id = $1
        GROUP BY 
            store_id;
        `;
        const result = await pool.query(query, [store_id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No ratings found for the given store ID"
            });
        }

        res.status(200).json({
            success: true,
            average_rating: result.rows[0].average_rating
        }); 
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
module.exports = AverageRating;