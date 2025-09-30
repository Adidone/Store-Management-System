const pool = require("../../../db");
const bcrypt = require("bcrypt");

const UpdatePassword = async (req, res) => {
    try {
        const { email, old_password, new_password } = req.body;
        if (!email || !old_password || !new_password) {
            return res.status(400).json({
                success: false,
                message: "Please provide email, old_password and new_password"
            });
        }
        const userResult = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        if (userResult.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        const user = userResult.rows[0];
        const isMatch = await bcrypt.compare(old_password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Old password is incorrect"
            });
        }
        const newHashedPassword = await bcrypt.hash(new_password, 10);

        await pool.query(
            "UPDATE users SET password = $1 WHERE email = $2",
            [newHashedPassword, email]
        );
        
        res.status(200).json({
            success: true,
            message: "Password updated successfully"
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

module.exports = UpdatePassword;