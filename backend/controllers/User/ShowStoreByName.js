const pool = require("../../db");

const ShowStoreByName = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Please provide a store name"
            });
        }

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
        WHERE
          s.name ILIKE $1
        GROUP BY
          s.id
        ORDER BY
          s.name;
        `;
        const result = await pool.query(query, [`%${name}%`]);
        const stores = result.rows;

        if (stores.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No stores found with the given name"
            });
        }

        res.status(200).json({
            success: true,
            stores: stores
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

module.exports = ShowStoreByName;       