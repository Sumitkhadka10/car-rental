import React from 'react';
import '../styles/blog.css';
const Blog = () => {
  // Sample list of blog posts about cars
  const carBlogPosts = [
    {
      id: 1,
      title: 'Top 10 Fuel-Efficient Cars of 2024',
      author: 'Car Expert',
      date: 'April 1, 2024',
      image: 'fuel-efficient-cars.jpg',
      description: 'Discover the top 10 fuel-efficient cars of 2024 and how they can save you money on gas while reducing your carbon footprint. From hybrids to electric vehicles, these cars offer impressive mileage and eco-friendly features.',
    },
    {
      id: 2,
      title: 'Tips for Maintaining Your Car in Winter',
      author: 'Car Care Guru',
      date: 'April 5, 2024',
      image: 'winter-car-maintenance.jpg',
      description: 'Learn essential tips for maintaining your car during the winter months, including tire care, engine maintenance, and more. Cold weather can be tough on vehicles, but with the right care, you can keep your car running smoothly all winter long.',
    },
   
  ];

  return (
    <div className="blog">
      <h2 className="blog-heading">Car Blog</h2>
      <div className="blog-posts">
        {carBlogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <div className="blog-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-post-details">
              <h3 className="blog-post-title">{post.title}</h3>
              <div className="blog-post-meta">
                <span className="blog-post-author">Author: {post.author}</span>
                <span className="blog-post-date">Date: {post.date}</span>
              </div>
              <p className="blog-post-description">{post.description}</p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
