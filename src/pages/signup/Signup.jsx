import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (

        <>

            <section className="signup-innerbanner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="signup-banner-text">
                                <h2>Signup</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="login-sec">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <div className="login_register">
                                <h3>Sign Up</h3>
                                <form>
                                    <input type="name" name="name" placeholder="Full Name" required />
                                    <input type="email" name="email" placeholder="Email" required />
                                    <input type="text" name="number" placeholder="Phone Number" required />
                                    <input type="password" name="password" placeholder="Password" required />
                                    <button type="submit" className="theme_dark">Signup</button>
                                    <div className="login-btn text-center">
                                        <p>Already have an Account?  <Link to='/login' className="create-account-link">Login</Link></p>
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

export default Signup