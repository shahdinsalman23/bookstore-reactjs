import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {


    // State for form data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // State for handling login status
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        const credentials = {
            username: formData.email, // Use formData.email for the username
            password: formData.password, // Use formData.password for the password
            expiresInMins: 30, // Optional
        };
    
        console.log('Submitting:', credentials);
    
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
    
            if (!response.ok) {
                throw new Error('Failed to login. Please check your credentials.');
            }
    
            const data = await response.json();
            console.log('Login successful:', data);
    
            // Handle tokens and authentication state here
            localStorage.setItem('authToken', data.token);
            setSuccess('Login successful!');
            setError('');
        } catch (error) {
            console.error('Error logging in:', error.message);
            setError('Login failed: ' + error.message);
            setSuccess('');
        }
    };
    
      


    return (

        <>
            <section className="login-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="login-banner-text">
                                <h2>Login</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="login-sec">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="login_register">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text" // Changed type to text for "username"
                                        name="email" // Consider renaming this field to "username" in formData for clarity
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Username"
                                        required
                                        aria-label="Username"
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        required
                                        aria-label="Password"
                                    />
                                    <button type="submit" className="theme_dark">
                                        Login
                                    </button>
                                    {error && (
                                        <p style={{ color: 'red', textAlign: 'center' }} aria-live="polite">
                                            {error}
                                        </p>
                                    )}
                                    {success && (
                                        <p style={{ color: 'green', textAlign: 'center' }} aria-live="polite">
                                            {success}
                                        </p>
                                    )}
                                    <div className="text-center">
                                        <a href="" className="right_link">
                                            Forget Your Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/signup" className="create-account-link">
                                            Create an Account
                                        </Link>
                                    </div>
                                </form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Login