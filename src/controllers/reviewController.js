import { createReviewQuery } from "../models/reviewModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createReviews = async (req, res, next) => {
  const { review } = req.body;
  //console.log(review);
  if (!review) {
    return res.status(400).json({ error: "Review Text is required" });
  }
  try {
    const newReview = await createReviewQuery(review);
    handleResponse(res, 200, "New Review Added Successfully", newReview);
  } catch (error) {
    // console.log("Create Review Error", error);
    next(error);
  }
};
