import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavLR from "../components/NavLR";
import { Container } from "@mui/material";
import {Form, Row, Col } from 'react-bootstrap';
import { Button } from "primereact/button";
import FooterLR from "../components/FooterLR";
import { AuthContext } from "../context/AuthContext";
import accountApi from "../api/accountApi";

const dividerStyles = {
  flexGrow: 1,
  height: '1px',
  backgroundColor: '#000',
  border: 'none',
  margin: '0 10px',
};
const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const url = "http://localhost:8082/api/guest/authenticate"
  const { loading, error, dispatch, user } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(url, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.role});
      console.log("res of login in order to get id token: ", res)
      localStorage.setItem("TOKEN",res.data.token)
      const resinfo = await accountApi.infor(res.data.accountId)

      // console.log(resinfo)
      localStorage.setItem('user',1)
      localStorage.setItem("username", resinfo.data.name)
      navigate(`/${res.data.role.toLowerCase()}/${res.data.accountId}`)
    } catch (err) {
      console.log("lỗi đăng nhập")
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
                  className=""
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  className=""
                  autoComplete="on"
                />
              </Form.Group>

              <Button disabled={loading} variant="primary"
                onClick={handleClick}
                className='col-12'
                label="Login"
                />
            </Form>
            <div className="m-4 text-center" style={{ color: "red" }}>
              {error && <span>{error.message}</span>}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="8" sm="6" md="4">
          <div className="d-flex justify-content-center align-items-center">
            <hr style={dividerStyles}/>
            <span className="fs-5">or</span>
            <hr style={dividerStyles}/>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-4">
        <Col xs="8" sm="6" md="4">
          <Link to="/guest/register"
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
