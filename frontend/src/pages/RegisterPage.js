import React, { useState } from 'react';
import { Form, FormGroup, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem dữ liệu đã được điền vào form hay chưa
    if (!username || !password || !confirmPassword || !role || !name || !address || !phone) {
      setErrorMessage('Vui lòng điền đầy đủ thông tin');
      setShowModal(true);
      return;
    }

    // Kiểm tra mật khẩu trùng khớp
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu không trùng khớp');
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

    try {
      // Gửi dữ liệu đăng ký người dùng đến server
      const response = await axios.post('http://localhost:3000/api/guest/register', payload);

      // Kiểm tra phản hồi từ server
      if (response.status === 200) {
        setShowModal(true);
      } else {
        setErrorMessage('Đăng ký thất bại');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Lỗi:', error);
      setErrorMessage('Lỗi khi gửi yêu cầu đăng ký');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage('');
  };

  return (
    <div className="register-page">
      <h2>Create Account</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="username">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="password">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="confirmPassword">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="role">
          <Form.Label>Vai trò</Form.Label>
          <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Chọn vai trò</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="hotel owner">Hotel Owner</option>
          </Form.Control>
        </FormGroup>

        <FormGroup controlId="name">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập họ và tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="address">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="phone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>

        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
      </Form>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        className="register-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {!errorMessage && <p className="success-message">Đăng ký thành công</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterPage;
