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
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons


const HotelDetailForCus = () => {
    const { id, hotelId } = useParams()
    const [datahotel, setDatahotel] = useState({})

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
    return (
        <>
           
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
                        {/* <Button icon="pi pi-file-edit"
                            style={{ width: "250px" }}
                            label="View availability room"
                            className="m-3 d-block"
                            onClick={() => setVisibleRoom(true)}
                        /> */}
                        
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
export default HotelDetailForCus