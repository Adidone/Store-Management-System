const pool = require("../../../db");
const ShowStores = async (req, res) => {
    try {
        const query = `
        SELECT
          s.id,
          s.name,
          s.email,
          s.address,
          ROUND(AVG(r.rating_value), 2) AS average_rating
        FROM
          stores s
        LEFT JOIN
          ratings r ON s.id = r.store_id
        GROUP BY
          s.id
        ORDER BY
          s.name;
        `;
        const result = await pool.query(query);
        const stores = result.rows;

        res.status(200).json({
            success: true,
            stores: stores
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

module.exports = ShowStores;