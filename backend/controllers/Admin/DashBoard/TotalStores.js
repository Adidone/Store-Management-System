
const TotalStores = async() => {
    try {
        const result = await pool.query("SELECT COUNT(*) FROM stores");
        const storeCount = result.rows[0].count; // Access the count value
        
        // console.log(`Total number of users: ${userCount}`);
        return res.status(200).json({
            success: true,
            totalStores: storeCount
        });
    } catch (err) {
        // console.error("Error getting user count", err);
        return res.status(500).json({
            success: false,
            message: "Server error",
            totalStores: 0
        });
    }
}

module.exports = TotalStores;