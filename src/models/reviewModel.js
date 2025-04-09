import pool from "../config/db.js";

export const createReviewQuery = async (review_text, result) => {
  const results = await pool.query(
    "INSERT INTO reviews (reviewtext, result) VALUES ($1, $2) RETURNING *",
    [review_text, result]
  );
  return results.rows[0];
};
