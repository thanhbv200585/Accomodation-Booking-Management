import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap"
import { FaUser, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

import axios from "axios"
import Navbar from "../components/Navbar";




// `/account/${id}/info`
const Cusinfo = () => {
    console.log("re-render")
    const fc = useRef(null)
    const navigate = useNavigate()
    const [accountInfo, setAccountInfo] = useState(null)
    const [activeTab, setActiveTab] = useState('info')
    const [editing, setEditing] = useState(false)
    const [passblock, setPassblock] = useState(false)
    const [usernameblock, setUsernameblock] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [submit2, setSubmit2] = useState(false)

    const [name, setName] = useState('')

    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    //token, id
    const { id } = useParams()
    const token = localStorage.getItem("TOKEN")
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    //function
    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }


    const handleSubmit = async () => {
        const payload = {
            name,
            address,
            phone
        }
        console.log("payload :", payload)
        try {
            const response = await axios.put(`http://localhost:8082/api/account/${id}/update`, payload, config)

            if (response.status === 200) {
                console.log("cap nhat thanh cong")
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
            console.log("khong update dc")
        }


        setEditing(false);
    }

    const handleChangeusername = async () => {



        setPassblock(!passblock)
        setSubmit(!submit)
    }

    const handleChangePass = async () => {

        setUsernameblock(!usernameblock)
        setSubmit2(!submit2)
    }

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
                .then((response) => {
                    console.log("response: ", response)
                    setAccountInfo(response.data)
                    setName(response.data.name)
                    setAddress(response.data.address)
                    setPhone(response.data.phone)
                    console.log("1")
                }).catch((error) => {
                    console.log(error)
                })

        };
        fetchData();
    }, [id, token]);



    if (!accountInfo) {
        return <div>Loading...</div>;
    }
    const Info = () => {
        return (
            <>
                <h1>Thông tin cá nhân</h1>
                <Card className="border-0">
                    <Card.Body>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaUser className="fs-5 m-1" />
                            </div>
                            {
                                editing ? (
                                    <input style={{ width: '300px' }}
                                        ref={fc}
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                            fc.current.focus()
                                        }}
                                    />

                                ) : (
                                    <span>{accountInfo.name}</span>
                                )
                            }

                        </div>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaMapMarkerAlt className="fs-5 m-1" />
                            </div>
                            {
                                editing ? (
                                    <input style={{ width: '300px' }}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                ) : (
                                    <span>{accountInfo.address}</span>
                                )
                            }
                        </div>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaPhone className="fs-5 m-1" />
                            </div>
                            {
                                editing ? (
                                    <input style={{ width: '300px' }}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                ) : (
                                    <span>{accountInfo.phone}</span>
                                )
                            }
                        </div>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaStar className="fs-5 m-1" />
                            </div>
                            <span>{accountInfo.score}</span>
                        </div>
                    </Card.Body>
                </Card >
                <div className="text-center mt-5">
                    {editing ? (
                        <Button className="mt-3"
                            variant="success"
                            style={{ width: "100%" }}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    ) : (
                        <Button style={{ width: "100%" }} onClick={() => setEditing(true)}>
                            Change information
                        </Button>
                    )}

                </div>
            </>

        )
    }
    const Security = () => {
        return (
            <>
                <h1>An toàn bảo mật</h1>
                <div className="mt-5 text-center">
                    {
                        usernameblock ? (
                            <Row className="">
                                <Col>
                                    <span>New username</span>
                                </Col>
                                <Col>
                                    <input />
                                </Col>
                            </Row>
                        ) : (
                            <>
                            </>
                        )
                    }
                    <div>
                        {
                            submit2 ? (
                                <Button variant="success" className="m-3"
                                    onClick={handleChangePass}>
                                    Submit change
                                </Button>
                            ) : (
                                <Button className="m-3"
                                    onClick={() => {
                                        setUsernameblock(!usernameblock)
                                        setSubmit2(!submit2)
                                    }}>
                                    Change username
                                </Button>
                            )
                        }
                    </div>
                    {
                        passblock ? (
                            <div>
                                <Row className="mb-3">
                                    <Col>
                                        <span>New password</span>
                                    </Col>
                                    <Col>
                                        <input type="password" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <span>Confirm</span>
                                    </Col>
                                    <Col>
                                        <input type="password" />
                                    </Col>
                                </Row>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                    <div>
                        {
                            submit ? (
                                <Button variant="success" className="m-3"
                                    onClick={handleChangeusername}>
                                    Submit change
                                </Button>
                            ) : (
                                <Button className="m-3"
                                    onClick={() => {
                                        setPassblock(!passblock)
                                        setSubmit(!submit)
                                    }}>
                                    Change password
                                </Button>
                            )
                        }
                    </div>


                </div >

            </>
        )
    }
    return (
        <div>
            <Navbar/>
            <Container className="mt-5">
                {/* sidebar */}
                <div className="float-start mx-5">
                    <div
                        className="p-3 m-2 border border-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTabClick('info')}
                    >
                        <div className="d-inline-block rounded-circle me-2" style={{ background: "#a3d7fc" }}>
                            <AiOutlineUser className="fs-3 m-2" />
                        </div>
                        Thông tin cá nhân
                    </div>
                    <div
                        className="p-3 m-2 border border-1"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleTabClick('security')}
                    >
                        <div className="d-inline-block rounded-circle me-2" style={{ background: "#a3d7fc" }}>
                            <FiLock className="fs-3 m-2" />
                        </div>
                        An toàn và bảo mật
                    </div>
                </div>

                {/* main */}
                <div className="float-start mx-5">
                    {activeTab === 'info' && <Info />}
                    {activeTab === 'security' && <Security />}
                </div>
            </Container>


        </div>


    )

}

export default Cusinfo

