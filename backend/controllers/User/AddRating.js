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

        const store = await pool.query(
            "SELECT * FROM stores WHERE id = $1",
            [store_id]
        );
        if(store.rows.length === 0){
            return res.status(404).json({
                success:false,
                message:"Store not found"
            });
        }

        const alreadyRated = await pool.query(  
            "SELECT * FROM ratings WHERE user_id = $1 AND store_id = $2",
            [user_id, store_id]
        );
        if(alreadyRated.rows.length > 0){
            return res.status(400).json({
                success:false,
                message:"Rating already added by this user for this store"
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