import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../UI/commonsection";
import BlogList from "../UI/Bloglist";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      {/* <CommonSection title="Blogs" /> */}
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
