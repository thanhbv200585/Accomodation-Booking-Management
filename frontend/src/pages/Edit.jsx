import { useState, useEffect, useRef } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { Card, Container, Form, Button } from "react-bootstrap"
import { FaUser, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';

import axios from "axios"

import Cusnavbar from "../components/Cusnavbar"




// `/account/${id}/info/edit`
const Edit = () => {
    console.log("re-render")
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    //token, id
    const location = useLocation()
    const data = location.state.data
    console.log("data: ", data)
    const token = data.token
    const id = data.id
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    //function

    useEffect(() => {
        setName(data.name)
        setAddress(data.address)
        setPhone(data.phone)

    }, []);

    const handleSubmit = async () => {
        const payload = {
            name,
            address,
            phone
        }
        await axios.post(`http://localhost:8082/api/account/${id}/update`, payload, config)
            .then(res => {
                console.log("Thay doi thanh cong")
            }).catch(err => {
                console.log(err)
                console.log("lỗi")
            }
            )
    }


    return (
        <>
            <h1>Thông tin cá nhân</h1>
            <Card className="border-0">
                <Card.Body>
                    <div className="info-item">
                        <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                            <FaUser className="fs-5 m-1" />
                        </div>
                        <input style={{ width: '300px' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="info-item">
                        <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                            <FaMapMarkerAlt className="fs-5 m-1" />
                        </div>
                        <input style={{ width: '300px' }}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="info-item">
                        <div className="d-inline-block rounded-circle me-2 mt-3" style={{ background: "#a2a2a2" }}>
                            <FaPhone className="fs-5 m-1" />
                        </div>
                        <input style={{ width: '300px' }}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </Card.Body>
            </Card >
            <div className="text-center mt-5" >
                <Button style={{ width: "100%" }}
                    onClick={handleSubmit}
                    variant="success"
                >
                    Submit
                </Button>

            </div>
        </>


    )

}

export default Edit

