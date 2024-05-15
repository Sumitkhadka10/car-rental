import React, { useState } from "react";
import useAuthentication from "../../hooks/useAuthentication";
import { NavLink } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { loadingContent } from "../../components/general/general-components";
import "./signup.css";

const Signup = () => {
    const { isLoading, message, signUpCall } = useAuthentication();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        fullName: "",
        dob: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUpCall(formData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div id="sign-up">
            <div className="signup-background">
                <Container className="pt-4 pb-5">
                    <Row className="mb-5">
                        <Col>
                            <h1 className="fs-1 text-center text-uppercase">Sign Up</h1>
                            {message && (
                                <Alert variant={message.isError ? "danger" : "success"}>
                                    {message.content}
                                </Alert>
                            )}
                        </Col>
                    </Row>
                    <div className="form">
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} className={isLoading ? "text-center" : null}>
                            {isLoading ? (
                                loadingContent
                            ) : (
                                <div className="form-container">
                                    <div className="form-box">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicUsername">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    placeholder="Enter username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicFullName">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="Enter full name"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicDOB">
                                                <Form.Label>Date of Birth</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className="rent-now-button primary-bg-color border-0 rounded-1 px-4 fw-bold"
                                            >
                                                Sign Up
                                            </Button>
                                        </Form>
                                    </div>
                                    <div className="text-center">
                                        <p>
                                            Already have an account?{" "}
                                            <NavLink to="/login">
                                                Sign in
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Signup;