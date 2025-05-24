import React, { useState, useEffect } from 'react';

// Default (preloaded) reviews
const defaultReviews = [
  {
    id: 1,
    name: 'Ravi Sharma',
    rating: 5,
    comment: 'Great grocery quality and fast delivery. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    date: new Date('2023-11-20').toISOString(),
  },
  {
    id: 2,
    name: 'Priya Mehta',
    rating: 4,
    comment: 'Fresh fruits and vegetables. Loved the packaging!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    date: new Date('2024-01-10').toISOString(),
  },
  {
    id: 3,
    name: 'Arjun Patel',
    rating: 5,
    comment: 'Affordable prices and a wide variety of products.',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    date: new Date('2024-02-15').toISOString(),
  },
];

// Merge default and stored reviews
const getStoredReviews = () => {
  const saved = localStorage.getItem('reviews');
  const parsed = saved ? JSON.parse(saved) : [];
  return [...defaultReviews, ...parsed];
};

function ClientReviewPage() {
  const [reviews, setReviews] = useState(getStoredReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const userReviews = reviews.filter(r => !defaultReviews.some(d => d.id === r.id));
    localStorage.setItem('reviews', JSON.stringify(userReviews));
  }, [reviews]);

  useEffect(() => {
    document.title = "ClientReviews";
  }, []);

  const getRandomAvatar = () => {
    const avatars = [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/65.jpg',
      'https://randomuser.me/api/portraits/women/12.jpg',
      'https://randomuser.me/api/portraits/men/22.jpg',
      'https://randomuser.me/api/portraits/women/36.jpg',
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name,
      rating,
      comment,
      avatar: getRandomAvatar(),
      date: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRating(1);
    setComment('');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Client Reviews</h1>

      {/* Reviews List */}
      <div className="row mb-5">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-light">
                <div className="card-body text-center">
                  <img
                    src={review.avatar}
                    alt="Client"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title mb-1">{review.name}</h5>
                  <div className="mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`fa fa-star ${index < review.rating ? 'text-warning' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <p className="card-text">{review.comment}</p>
                  <footer className="blockquote-footer mt-2">
                    <small>{new Date(review.date).toLocaleDateString()}</small>
                  </footer>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No reviews yet. Be the first to leave one!</p>
        )}
      </div>

      {/* Review Form */}
      <h3 className="text-center mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4, 5].map((val) => (
                <option key={val} value={val}>{val} Star{val > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Your Review</label>
          <textarea
            id="comment"
            className="form-control"
            rows="4"
            placeholder="Write your review here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Review</button>
      </form>
    </div>
  );
}

export default ClientReviewPage;
