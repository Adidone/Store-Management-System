const pool = require("../../db");
const bcrypt = require("bcrypt");
const{validatePassword,validateEmail} = require("../../validator/Validator")


const AddUser = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
        const role = 'STORE_OWNER';
        if (!name || !email || !password || !address) {
            return res.status(400).json({
                sucess: false,
                message: "Please provide name, email, password and address"
            });
        }
        if(!validatePassword(password)) {
            return res.status(400).json({
                sucess:false,
                message:"Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
            });
        }
        if(!validateEmail(email)){
            return res.status(400).json({
                sucess: false,
                message: "Please provide a valid email"
            });
        }
        if(!(email)){
            return res.status(400).json({
                sucess: false,
                message: "Please provide a valid email"
            });
        }
        

        const already = await pool.query(
            "SELECT 1 FROM users WHERE email = $1",
            [email]
        );
        if (already.rows.length > 0) {
            return res.status(400).json({
                sucess: false,
                message: "User with this email already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await pool.query(
            "INSERT INTO users (name, email, password, address,role) VALUES ($1, $2, $3, $4,$5) RETURNING *",
            [name, email, hashedPassword, address,role]
        );
        return res.status(201).json({
            sucess:true,
            user: newUser.rows[0],
            message: "User added successfully"
        });

    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json("Server Error");
    }
};

module.exports =  AddUser ;   