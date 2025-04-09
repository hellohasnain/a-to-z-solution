// pages/technician-rating.jsx
"use client";

import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function TechnicianRatingPage() {
  // Sample technician data
  const [technician, setTechnician] = useState({
    id: '123',
    name: 'Junaid Raza',
    specialty: 'AC Technician',
    averageRating: 4.2,
    totalReviews: 8,
    reviews: [
      {
        id: '1',
        rating: 5,
        comment: 'Excellent service! Fixed my AC in no time.',
        date: '2023-05-15',
        reviewer: 'Jane D.'
      },
      {
        id: '2',
        rating: 4,
        comment: 'Good work but arrived a bit late.',
        date: '2023-04-22',
        reviewer: 'Michael B.'
      },
      {
        id: '3',
        rating: 3,
        comment: 'Did the job but communication could be better.',
        date: '2023-03-10',
        reviewer: 'Sarah K.'
      }
    ]
  });

  // Form state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newReview = {
        id: Date.now().toString(),
        rating,
        comment: review,
        date: new Date().toISOString(),
        reviewer: reviewerName || 'Anonymous'
      };

      // Update technician data
      const updatedReviews = [newReview, ...technician.reviews];
      const newAverage = calculateAverageRating(updatedReviews);
      
      setTechnician({
        ...technician,
        reviews: updatedReviews,
        averageRating: newAverage,
        totalReviews: updatedReviews.length
      });

      // Reset form
      setRating(0);
      setReview('');
      setReviewerName('');
      setSubmitted(true);
      setIsLoading(false);
      
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const calculateAverageRating = (reviews) => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return parseFloat((total / reviews.length).toFixed(1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Technician Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                {technician.name.charAt(0)}
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{technician.name}</h1>
              <p className="text-gray-600">{technician.specialty}</p>
              <div className="mt-2 flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`h-5 w-5 ${star <= Math.round(technician.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {technician.averageRating} ({technician.totalReviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Form after baceknd*/}
        {/* <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave a Review</h2>
          
          {submitted && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">
              Thank you for your review!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`${star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'} h-8 w-8`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <StarIcon className="h-6 w-6" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                id="review"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div> */}

        {/* Reviews List */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
          
          {technician.reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="space-y-6">
              {technician.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{review.reviewer}</h3>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon
                            key={star}
                            className={`h-5 w-5 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}