
const TotalUsers = async() => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM users");
        const userCount = result.rows[0].count; // Access the count value
        
        // console.log(`Total number of users: ${userCount}`);
        return res.status(200).json({
            success: true,
            totalUsers: userCount
        });
    } catch (err) {
        // console.error("Error getting user count", err);
        return res.status(500).json({
            success: false,
            message: "Server error",
            totalUsers: 0
        });
    }
}

module.exports = TotalUsers;