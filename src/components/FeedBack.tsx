import { useState, useEffect } from 'react';
import './FeedBack.css';

interface Review {
  name: string;
  rating: string;
  comment: string;
}

const ReviewsContainer: React.FC = () => {
  const [review, setReview] = useState<Review>({
    name: "",
    rating: "5",
    comment: "",
  });

  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviewsList');
    if (storedReviews) {
      setReviewsList(JSON.parse(storedReviews));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReview({
      ...review, [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.comment.trim() === "") {
      alert("Please write a review.");
      return;
    }
    
    const updatedReviews = [...reviewsList, review];
    setReviewsList(updatedReviews);
    localStorage.setItem('reviewsList', JSON.stringify(updatedReviews));
    setReview({ name: "", rating: "5", comment: "" });
  };

  return (
    <div className="reviews-container">
      <header className="reviews-header">
        <h1>What Our Users Say</h1>
        <p>Your feedback makes us better. Share your thoughts below!</p>
      </header>
      <section className="review-form">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name (Optional):</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={review.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select 
              id="rating" 
              name="rating" 
              value={review.rating} 
              onChange={handleChange}
            >
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="2">⭐⭐</option>
              <option value="1">⭐</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Your Review:</label>
            <textarea 
              id="comment" 
              name="comment" 
              rows={5} 
              value={review.comment} 
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit Your Review</button>
        </form>
      </section>
      <section className="reviews-list">
        <h2>Recent Reviews</h2>
        {reviewsList.length > 0 ? (
          reviewsList.map((item, index) => (
            <div className="review-item" key={index}>
              <p>
                <strong>{'⭐'.repeat(Number(item.rating))}</strong> - "{item.comment}"
              </p>
              {item.name && <p><em>– {item.name}</em></p>}
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </section>
    </div>
  );
};

export default ReviewsContainer;
