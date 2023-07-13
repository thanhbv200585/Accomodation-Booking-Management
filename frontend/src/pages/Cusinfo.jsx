import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Card, Row, Col } from "react-bootstrap"
import { FaUser, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import { Button } from 'primereact/button'
import axios from "axios"
import Navbar from "../components/Navbar";
import EditInfoForm from "../components/dialog/EditInfoForm";
import 'primeicons/primeicons.css'
import { faPlane, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import guestApi from "../api/guestApi"
import BookingDeleteModal from "../components/Booking/BookingDeleteModal";
import { format } from "date-fns";

const Cusinfo = () => {
    console.log("re-render")
    const [accountInfo, setAccountInfo] = useState(null)
    const [activeTab, setActiveTab] = useState('info')
    const [editing, setEditing] = useState(false)
    const [passblock, setPassblock] = useState(false)
    const [usernameblock, setUsernameblock] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [submit2, setSubmit2] = useState(false)
    const [booking, setBooking] = useState([])
    const [deletedBooking, setDeletedBooking] = useState(-1)
    //token, idsàe
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
        localStorage.removeItem('user')
        localStorage.removeItem('username')
        window.location.href = '/login';
    }
    
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
                .then((response) => {
                    console.log("response: ", response)
                    setAccountInfo(response.data)
                }).catch((error) => {
                    console.log(error)
                })
        };
        fetchData();
    }, [id, token]);

    useEffect(() => {
        const url = `http://localhost:8082/api/customer/${id}/booking/all`
        const getBooking = async () => await axios.get(url, config).then((response) => {
            setBooking(response.data)
        }).catch((err) => {
            console.log(err);
        })
        getBooking()
    }, [activeTab])
    
    if (!accountInfo) {
        return <div>Loading...</div>;
    }
    const Info = () => {
        return (
            <div>
                <EditInfoForm
                visible={editing}
                onHide={() => setEditing(false)} />
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
                </Card>
                <div className="text-center mt-5">
                    <Button
                        icon='pi pi-user-edit'
                        label="Change information"
                        style={{ width: "100%"}} onClick={() => setEditing(true)}
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
                </div>
            </div>
        )
    }

    const BookingItem = ({item, setShowModal}) => {
        const [image, setImage] = useState("")

        console.log(item)
        useEffect(() => {
            guestApi.viewHotelDetail(item.hotelId).then((res) => {
                setImage(res.data.avatarHotel)
            })
        })

        const handleDelete = (bookingId) => {
            setShowModal(true)
            setDeletedBooking(bookingId)
        }

        return (
            <div className="w-100 m-2 p-4 bg-gray-200/[.5] rounded flex relative">
                <div><img src={image} className="w-48 h-48"></img></div>  
                    <div className="ml-2">
                        <Link className="text-xl font-bold text-[#0071c2]" to={`/hotel/${item.hotelId}`}>{item.nameHotel}</Link>
                        {Object.keys(item.rooms).map((room) => (
                            <div>
                                <div>{item.rooms[room]}x {room}</div>
                            </div>
                        ))} 
                        {/* {<div>{format( item !== undefined ? item.dateCheckIn : new Date(), "MM/dd/yyyy")}</div>} */}
                        <div className="text-sm text-blue-400">{item.dateCheckIn.substr(0, 10)} - {item.dateCheckOut.substr(0, 10)}</div>
                    </div>
                <div className="absolute top-2 right-2">
                    <button onClick={() => handleDelete(item.bookingId)}><FontAwesomeIcon icon={faTrashCan} className="text-xl p-2 text-red-700 hover:text-red-500"/></button>
                </div>
                <div className="absolute bottom-2 right-2 text-xl font-semibold">VND {item.totalBill}</div>        
            </div>
        )
    }
    const BookingList = () => {
        const [showModal, setShowModal] = useState(false)

        console.log(booking)
        if (booking.length === 0)
            return (
                <div className="text-2xl font-bold text-center my-auto">
                    There is no booking in this list
                </div>
            )
        return (
            <div className="h-100 flex flex-col">
                {booking.map((item) => (
                    <div>
                        <BookingItem item={item} setShowModal={setShowModal}/>
                        <BookingDeleteModal showModal={showModal} setShowModal={setShowModal} bookingId={deletedBooking}/>
                    </div>
                ))}
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
                <div className="d-flex align-items-center">   
                    <div>
                        <div
                            className="p-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleTabClick('booking')}
                        >
                            <Button
                                icon={<FontAwesomeIcon icon={faPlane} />}
                                label="My Booking" className="p-button-text p-button-info"
                                style={{ width: "20vw" }}
                                onClick={() => handleTabClick('booking')}
                            />
                        </div>
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
                    {activeTab === 'booking' && <BookingList />}
                </div>
            </div>
        </div>
    )
}

export default Cusinfo

