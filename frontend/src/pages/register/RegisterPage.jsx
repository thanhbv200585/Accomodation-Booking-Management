import React, { useState } from 'react';
import { Form, FormGroup, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import NavLR from '../../components/navbar/NavLR';
import { useNavigate } from 'react-router-dom';
import FooterLR from '../../components/FooterLR';



function isPhoneNumber(phoneNumber) {
  const regex = /^(?:\+84|0[123456789]|1[0123456789])[0-9]{8,9}$/;
  return regex.test(phoneNumber);
}


const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Trạng thái hiển thị mật khẩu
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Trạng thái hiển thị xác nhận mật khẩu
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem dữ liệu đã được điền vào form hay chưa
    if (!username || !password || !confirmPassword || !role || !name || !address || !phone) {
      setErrorMessage('Let fill all information');
      setShowModal(true);
      return;
    }

    // Kiểm tra mật khẩu trùng khớp
    if (password !== confirmPassword) {
      setErrorMessage('Password does not match');
      setShowModal(true);
      return;
    }

    //kiểm tra số điện thoại
    if (!isPhoneNumber(phone)) {
      setErrorMessage('Invalid phone number');
      setShowModal(true);
      return;
    }
    // Tạo payload từ dữ liệu đăng ký
    const payload = {
      username,
      password,
      role,
      name,
      address,
      phone,
    };

    console.log(payload)
    try {
      // Gửi dữ liệu đăng ký người dùng đến server
      const response = await axios.post('http://localhost:8082/api/guest/register', payload);

      // Kiểm tra phản hồi từ server
      if (response.status === 200) {
        setShowSuccessModal(true);

      } else {
        setErrorMessage('Fail Registration');
        setShowModal(true);
      }
      console.log(response)
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.response.data.message);
      setShowModal(true);

    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <>
      <NavLR />
      <h2 className='m-5 fw-bold text-center'>Create Account</h2>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="username" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Use name</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type="text"
                placeholder="Enter use name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="password" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Password</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </Col>
            <Col sm={1}>
              <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="confirmPassword" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Confirm password</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Col>
            <Col sm={1}>
              <div className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="role" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Role</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm" as="select" value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select role</option>
                <option value="ADMIN">Admin</option>
                <option value="CUSTOMER">Customer</option>
                <option value="OWNER">Hotel Owner</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="name" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Full name</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="address" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Address</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="phone" className="mb-3">
            <Form.Label column sm={3} className='fw-bold'>Phone</Form.Label>
            <Col sm={6}>
              <Form.Control
                className="form-control-sm"
                type="text"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 6, offset: 3 }}>
              <Button variant="primary" type="submit" className='col-12'>
                Sign up
              </Button>
            </Col>
          </Form.Group>

        </Form>

        <Modal
          show={showModal}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Check out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {!errorMessage && <p className="success-message">Successful Registration</p>}
          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary"
              onClick={handleCloseModal}
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showSuccessModal}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header className='justify-content-center'>
            <Modal.Title>Successful Registration</Modal.Title>
          </Modal.Header>
          <Modal.Footer className="justify-content-center">
            <Button variant="primary"
              onClick={() => {
                setShowSuccessModal(false)
                navigate('/login')
              }}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        <FooterLR />

      </Container>
    </>
  );
};

export default RegisterPage;
