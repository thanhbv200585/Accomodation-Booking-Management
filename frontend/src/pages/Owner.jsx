import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CreateHotelForm from "../components/form/CreactHotelForm"

import { Splitter, SplitterPanel } from 'primereact/splitter';

const Owner = () => {
    const [hotelformvisible, setHotelformvisible] = useState(false)
    const handlehotelformhile = () => {
        setHotelformvisible(false)
    }

    return (



        <Container>
            <CreateHotelForm visible={hotelformvisible} onHide={handlehotelformhile} />
            <Row>
                <Col md={3} className=''>
                        <div
                            onClick={() => setHotelformvisible(true)}
                        >
                            Create Hotel
                        </div>

                    <div>
                        <button>
                            List Hotel
                        </button>
                    </div>

                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    )
}

export default Owner