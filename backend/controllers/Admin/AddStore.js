const {validateEmail} = require("../../validator/Validator")
const pool = require("../../db");
const AddStore = async(req, res) => { 
    try{
        const {name,email,address,owner_id} = req.body;
        if(!name || !email || !address || !owner_id){
            return res.status(400).json({
                success:false,
                message:"Please provide name, email, address and owner_id"
            });
        }
        if(!validateEmail(email)){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid email"
            });
        }
        const newStore = await pool.query(
            "INSERT INTO stores (name, email, address, owner_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [name,email,address,owner_id]
        );
        res.status(201).json({
            success:true,
            store:newStore.rows[0],
            message:"Store added successfully"
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

module.exports = AddStore;  