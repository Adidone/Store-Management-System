const pool = require("../../db");

const AddRating = async(req, res) => {
    try{
        const {user_id, store_id, rating_value} = req.body;
        if(!user_id || !store_id || !rating_value){
            return res.status(400).json({
                success:false,
                message:"Please provide user_id, store_id and rating_value"
            });
        }
        if(rating_value < 1 || rating_value > 5){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid rating_value between 1 and 5"
            });
        }
        const newRating = await pool.query(
            "INSERT INTO ratings (user_id, store_id, rating_value) VALUES ($1, $2, $3) RETURNING *",
            [user_id, store_id, rating_value]
        );
        res.status(201).json({
            success:true,
            rating:newRating.rows[0],
            message:"Rating added successfully"
        });
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }       
}

module.exports = AddRating; 