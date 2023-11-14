import { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";

import './Addreview.css'
import { AuthContext } from '../../providers/AuthProvider';
const Addreview= () => {
  const [rating, setRating] = useState(0);
  const [selectedStars, setSelectedStars] = useState([]);
  const [reviewMessage, setReviewMessage] = useState([]);

  const { user } = useContext(AuthContext);
  const userr=user.displayName;
  console.log(userr)

  const handleStarClick = (newRating) => {
    // Update the selected stars array
    const newSelectedStars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= newRating) {
        newSelectedStars.push(i);
      }
    }
    setSelectedStars(newSelectedStars);

    // Update the rating state
    setRating(newRating);
  };

  const handleSubmitReview = () => {
    // Send the rating and review message to the Node.js backend
    // using an HTTP POST request
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating,
        reviewMessage,
        userr
      }),
    }).then((response) => {
      if (response.ok) {
        // Reset the rating and selected stars state
        setRating(0);
        setSelectedStars([]);
        setReviewMessage('');
      } else {
        // Handle error
        console.error('Error submitting review:', response.statusText);
      }
    });
  };

  const starColor = '#ffc107'; // Replace with your desired star color

  return (
    <div className="review-card">
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            color={selectedStars.includes(star) ? starColor : '#ccc'}
            className={`star ${selectedStars.includes(star) ? 'active' : ''}`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
      <textarea
        className="review-message"
        placeholder="Write your review here..."
        value={reviewMessage}
        onChange={(event) => setReviewMessage(event.target.value)}
      />
      <button className="submit-review" onClick={handleSubmitReview}>
        Submit Review
      </button>
    </div>
  );
};

export default Addreview;
