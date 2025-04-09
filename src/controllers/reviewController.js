import { createReviewQuery } from "../models/reviewModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createReviews = async (req, res, next) => {
  const { reviewtext, result } = req.body;
  if (!reviewtext) {
    return res.status(400).json({ error: "review_text is required" });
  }
  try {
    const newReview = await createReviewQuery(reviewtext, result);
    handleResponse(res, 200, "New Review Added Successfully", newReview);
  } catch (error) {
    next(error);
  }
};
