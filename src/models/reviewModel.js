import pool from "../config/db.js";
import axios from "axios";
export const createReviewQuery = async (review) => {
  try {
    const results = await pool.query(
      "INSERT INTO reviews (reviewtext) VALUES ($1) RETURNING id",
      [review]
    );
    //console.log("Insert Result", results);
    const reviewId = results.rows[0].id;

    const mlResponse = await axios.post("http://localhost:4000/predict", {
      review: review,
    });
    const { prediction } = mlResponse.data;
    //console.log("Prediction", prediction)

    await pool.query("UPDATE reviews SET result = $1 WHERE id = $2", [
      prediction,
      reviewId,
    ]);
    //console.log(prediction,reviewId);
    return { id: reviewId, result: prediction };
  } catch (error) {
    console.error(error);
  }
};

