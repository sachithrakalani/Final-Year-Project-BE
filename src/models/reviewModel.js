import pool from "../config/db.js";

export const createReviewQuery = async (review_text, result) => {
  const result = await pool.query(
    "INSERT INTO reviews (review_text, result) VALUES ($1, $2) RETURN *",
    [review_text, result]
  );
  return result.rows[0];
};
