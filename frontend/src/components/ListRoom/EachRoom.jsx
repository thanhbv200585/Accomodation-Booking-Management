import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import '../RoomImageSlider/RoomImageSlider.css'
import { Row, Col } from "react-bootstrap";
const EachRoom = ({ room }) => {
    // console.log(room.roomNumber[room.roomType])
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === room.images.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? room.images.length - 1 : slide - 1)
    }
    return (
        <Row className='d-flex m-3'>
            {/* //avatar */}
            <Col xs={4}>
                <div
                style={{position:"relative",top:"100px"}}
                >
                    <BsArrowLeftCircleFill onClick={prevSlide} className="arrow" />
                </div>
                <div
                style={{position:"relative",top:"100px",left:"230px"}}
                >
                    <BsArrowRightCircleFill onClick={nextSlide} className="arrow" />
                </div>

                {room.images.map((img, index) => (
                    <img src={img} key={index} className={slide === index ? "slide" : "slide slide-hidden"}
                        style={{height:"250px"}}
                    />
                ))}
            </Col>
            <Col xs={8}>
                <div>
                    <b>Room type:</b> {room.roomType}
                </div>
                <div>
                    <b>Number of this room:</b> {room.numberRooms}
                </div>
                <div>
                    <b>Price:</b> {room.price}
                </div>
                <div>
                    <b>Description:</b> {room.description}
                </div>
                <div>
                    <b>Service:</b> {room.service.map((sv,index)=>(<li key={index}>{sv}</li>))}
                </div>
            </Col>
        </Row>
    )
}
export default EachRoom