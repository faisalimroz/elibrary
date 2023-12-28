import  { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewCard from './ReviewCard/ReviewCard';


const Demo = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend
    axios.get('http://localhost:5000/reviews')
      .then(response => {
        setReviews(response.data);
        console.log('dc',response.data)
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="reviews mt-5 mb-5">
   
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Demo;
