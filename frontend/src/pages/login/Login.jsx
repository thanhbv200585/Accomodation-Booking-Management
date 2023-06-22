import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import NavLR from "../../components/navLogigRegister/NavLR";
import { Container } from "@mui/material";
import { Button, Form, Row, Col } from 'react-bootstrap';
import FooterLR from "../../components/footerLR/FooterLR";


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const url = "http://localhost:8082/api/guest/authenticate"
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(url, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <>
      <NavLR />
      <h2 className='m-5 fw-bold text-center'>Sign in or create an account</h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs="10" sm="8" md="6">
            <Form>
              <Form.Group controlId="username" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                  className="lInput"
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  className="lInput"
                />
              </Form.Group>

              <Button disabled={loading} variant="primary"
                onClick={handleClick}
                className='col-12'>
                Login
              </Button>
            </Form>
            <div className="m-4 text-center" style={{ color: "red" }}>
              {error && <span>{error.message}</span>}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="8" sm="6" md="4">
          <div className="divider-container">
            <hr className="divider" />
            <span className="divider-text">or</span>
            <hr className="divider" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-4">
        <Col xs="8" sm="6" md="4">
          <Link to="/api/guest/register"
          className="p-2"
          style={{background: "green", color:"white",
          textDecoration:"none", borderRadius:"5px"}}>
            
            Create new account
          </Link>
        </Col>
      </Row>

      <Row className="justify-content-center text-center mt-4">
        <Col xs="8" sm="6" md="4">
          <Link to="">
          Forgotten password
          </Link>
        </Col>
      </Row>
    </Container >
    <FooterLR/>
    </>
  );
};

export default Login;
