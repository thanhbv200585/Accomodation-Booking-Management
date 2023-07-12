import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import guestApi from "../api/guestApi"
import MailList from "../components/mailList/MailList"
import Footer from "../components/footer/Footer"
import { Container, Image, Row, Col } from "react-bootstrap"
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Button } from 'primereact/button';
import EditHotelForm from "../components/dialog/edithotelform"
import NewRoomForm from "../components/dialog/NewRoomForm"
import AllBooking from "../components/dialog/allBooking"
import AllRoom from "../components/ListRoom/AllRoom"
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons



const HotelDetailForOwner = () => {
    const { id, hotelId } = useParams()
    const [datahotel, setDatahotel] = useState({})
    const [edithotelform, setEdithotelform] = useState(false)
    const [visibleNewRoom, setVisibleNewRoom] = useState(false)
    const [visibleBooking, setVisibleBooking] = useState(false)
    // const [rooms, setRooms] = useState([])
    // console.log(rooms)
    useEffect(() => {
        const getDataHotel = async () => {
            try {
                const res = await guestApi.viewHotelDetail(hotelId)
                // console.log(hotelId)
                setDatahotel(res.data)
                // console.log(datahotel)
                // setRooms(res.data.rooms)
                // console.log(rooms)
            }
            catch (err) {
                console.log(err)
            }
        }
        getDataHotel()
    }, [])

    if (!datahotel)
        return (
            <div>
                Loading...
            </div>
        )
    const handledithotelform = () => {
        setEdithotelform(false)
    }
    return (
        <>
            <AllBooking
            visible={visibleBooking}
            onHide={() => setVisibleBooking(false)}
            />
            <NewRoomForm
                visible={visibleNewRoom}
                onHide={() => setVisibleNewRoom(false)}
            />
            <EditHotelForm
                visible={edithotelform} onHide={handledithotelform}
            />
            <Navbar />
            <Container style={{maxWidth:"1024px"}}>
                <div className="mt-3 fs-2 fw-bold">
                    {datahotel.nameHotel}
                </div>
                <div className='my-3'>
                    <FaMapMarkerAlt
                        className='me-2'
                    />
                    <span
                        className="fs-6 fst-italic"
                        style={{ color: "#0000FF" }}
                    >{datahotel.location}</span>
                </div>
                <Row>
                    <Col sm={3}>
                        <Image src={datahotel.avatarHotel}
                            style={{ width: "200px", height: "200px" }}
                        />
                    </Col>
                    <Col
                    className="d-block" 
                    sm={{ span: 6, offset: 3 }}>
                        <Button icon="pi pi-file-edit"
                            style={{ width: "250px" }}
                            label="Edit hotel information"
                            className="m-3 d-block"
                            onClick={() => setEdithotelform(true)}
                        />
                        <Button
                            className="m-3 d-block"
                            style={{ width: "250px" }}
                            icon="pi pi-plus" label="New room"
                            onClick={() => setVisibleNewRoom(true)}
                        />
                        <Button
                            className="m-3 d-block"
                            style={{ width: "250px" }}
                            icon="pi pi-eye"
                            label="Booking managament"
                            onClick={() => setVisibleBooking(true)}
                        />
                    </Col>
                </Row>
                <div className="fw-bold my-2">
                    {datahotel.shortDescription}
                </div>
                <div className="fw-light my-2">
                    {datahotel.detailDescription}
                </div>
                <div className="fs-3 text-center">
                    <b>All Rooms</b>
                </div>
                <div>
                    <AllRoom/>
                </div>

            </Container>
            <MailList />
            <Footer />
        </>
    )
}
export default HotelDetailForOwner