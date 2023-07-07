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

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons



const HotelDetailForOwner = () => {
    const { id, hotelId } = useParams()
    const [datahotel, setDatahotel] = useState({})
    const [edithotelform, setEdithotelform] = useState(false)
    const [visibleNewRoom, setVisibleNewRoom] = useState(false)

    useEffect(() => {
        const getDataHotel = async () => {
            try {
                const res = await guestApi.viewHotelDetail(hotelId)
                console.log(hotelId)
                setDatahotel(res.data)
                console.log(datahotel)
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
            <NewRoomForm
                visible={visibleNewRoom}
                onHide={() => setVisibleNewRoom(false)}
            />
            <EditHotelForm
                visible={edithotelform} onHide={handledithotelform}
            />
            <Navbar />
            <Container>
                <div>
                    <h2>{datahotel.nameHotel}</h2>
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
                            style={{ width: "30vw", height: "30vw" }}
                        />
                    </Col>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Button icon="pi pi-file-edit"
                            style={{ width: "250px" }}
                            label="Edit hotel information"
                            className="m-3 d-block"
                            onClick={() => setEdithotelform(true)}
                        />
                        <Button
                            className="m-3"
                            style={{ width: "250px" }}
                            icon="pi pi-plus" label="New room"
                            onClick={() => setVisibleNewRoom(true)}
                        />
                    </Col>
                </Row>
                <div className="fw-bold my-2">
                    {datahotel.shortDescription}
                </div>
                <div className="fw-light my-2">
                    {datahotel.detailDescription}
                </div>

            </Container>
            <MailList />
            <Footer />
        </>
    )
}
export default HotelDetailForOwner