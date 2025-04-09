import pool from "../config/db.js";

const createReviewTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    reviewtext VARCHAR(500) NOT NULL,
    result VARCHAR (100)
    ) `;
  try {
    pool.query(queryText);
    console.log("Review Table is created if not exists");
  } catch (error) {
    console.log("Error creating Review table", error);
  }
};

export default createReviewTable;
