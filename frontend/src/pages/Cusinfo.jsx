import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Card, Container, Row, Col } from "react-bootstrap"
import { FaUser, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Button } from 'primereact/button'
import axios from "axios"
import Navbar from "../components/Navbar";
import accountApi from "../api/accountApi";
import EditInfoForm from "../components/dialog/EditInfoForm";

// `/account/${id}/info`
const Cusinfo = () => {
    console.log("re-render")
    const [accountInfo, setAccountInfo] = useState(null)
    const [activeTab, setActiveTab] = useState('info')
    const [editing, setEditing] = useState(false)
    const [passblock, setPassblock] = useState(false)
    const [usernameblock, setUsernameblock] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [submit2, setSubmit2] = useState(false)


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
        try {
            const response = await accountApi.update(id, accountInfo)
            console.log("1111")
            if (response.status === 200) {
                console.log("cap nhat thanh cong")
                // window.location.reload()
            }

        } catch (error) {
            console.log(error)
            console.log("khong update dc")
        }
    }
    const handleChangeusername = async () => {
        setPassblock(!passblock)
        setSubmit(!submit)
    }
    const handleChangePass = async () => {

        setUsernameblock(!usernameblock)
        setSubmit2(!submit2)
    }
    const handleLogout =()=>{
        localStorage.removeItem('TOKEN');
        window.location.href = '/login';
    }
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
                .then((response) => {
                    console.log("response: ", response)
                    setAccountInfo(response.data)
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
            <div >
                <EditInfoForm visible={editing} onHide={() => setEditing(false)} />
                <h1>Personal information</h1>
                <Card className="border-0">
                    <Card.Body>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaUser className="fs-5 m-1" />
                            </div>
                            <span>{accountInfo.name}</span>
                        </div>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaMapMarkerAlt className="fs-5 m-1" />
                            </div>
                            <span>{accountInfo.address}</span>
                        </div>
                        <div className="info-item">
                            <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                                <FaPhone className="fs-5 m-1" />
                            </div>
                            <span>{accountInfo.phone}</span>
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
                    <Button
                        icon='pi pi-user-edit'
                        label="Change information"
                        style={{ width: "100%" }} onClick={() => setEditing(true)}
                    />
                </div>
            </div>

        )
    }
    const Security = () => {
        return (
            <div>
                <h1>Safe and secure</h1>
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

            </div>
        )
    }
    return (
        <div style={{ background: "#F2F3F5" }}>
            <Navbar />
            <div className="d-flex"
            style={{ height: "94vh"}}
            >
                {/* sidebar */}
                <div className="d-flex align-items-center"
                    
                >
                    <div>
                        <div
                            className="p-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleTabClick('info')}
                        >
                            <Button
                                icon='pi pi-user'
                                label="Personal information"
                                className="p-button-text p-button-info "
                                style={{ width: "20vw" }}
                            />
                        </div>
                        <div
                            className="p-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleTabClick('security')}
                        >
                            <Button
                                icon='pi pi-shield'
                                label="Safe and secure" className="p-button-text p-button-info"
                                style={{ width: "20vw" }}
                            />

                        </div>
                        <div
                            className="p-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleTabClick('security')}
                        >
                            <Button
                                icon='pi pi-sign-out'
                                label="Log out" className="p-button-text p-button-info"
                                style={{ width: "20vw" }}
                                onClick={handleLogout}
                            />
                            
                        </div>
                    </div>
                </div>

                {/* main */}
                <div className="px-5 pt-5"
                style={{width:"80vw", background:"#FFFFFF"}}
                >
                    {activeTab === 'info' && <Info />}
                    {activeTab === 'security' && <Security />}
                </div>
            </div>


        </div>


    )

}

export default Cusinfo

