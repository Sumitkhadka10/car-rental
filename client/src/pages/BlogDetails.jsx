import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/blog-img/driver.jpg";
import "../styles/blogdetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState("");
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoggedIn(/* Your logic to check if user is logged in */);
  }, [blog]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (comment.trim() !== "") {
        console.log("Comment submitted:", comment);
        // Clear comment field after submission if needed
        setComment("");
      } else {
        console.log("Comment cannot be blank!");
      }
    } else {
      console.log("User must login or signup to post a comment!");
    }
  };

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>
                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>
                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>
              <div className="comment__list mt-5">
                <h4 className="mb-5">1 Comments</h4>
                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">Kp oli</h6>
                    <p className="section__description mb-0">14 April, 2024</p>
                    <p className="section__description">
                    WOW! What a wonderful blog post! I found the insights and tips incredibly valuable. 
                    Thanks for sharing such valuable information. Looking forward to more amazing content like this
                    </p>
                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Reply
                    </span>
                  </div>
                </div>
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    {isLoggedIn ? "You can post your comment below:" : "You must sign in to post a comment"}
                  </p>
                  <Form onSubmit={handleCommentSubmit}>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                        value={comment}
                        onChange={handleCommentChange}
                      ></textarea>
                    </FormGroup>
                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
