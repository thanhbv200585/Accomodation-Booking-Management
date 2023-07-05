import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CreateHotelForm from "../components/form/CreactHotelForm"

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
const Owner = () => {
    const [hotelformvisible, setHotelformvisible] = useState(false)
    const handlehotelformhile = () => {
        setHotelformvisible(false)
    }
    const [visible, setVisible] = useState(false)

    return (



        <Container>
            {/* <CreateHotelForm 
            visible={hotelformvisible} onHide={handlehotelformhile} 
            /> */}

            <div>
                <Button
                    label="Show"
                    icon="pi pi-external-link"
                    onClick={() => setVisible(true)}
                />
                <Dialog
                    header="Header"
                    visible={visible}
                    style={{ width: "50vw" }}
                    onHide={() => setVisible(false)}
                >
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
            <Row>
                <Col md={3} style={{ height: "100vh" }}>
                    <div className='p-3 m-2 mt-5'
                        style={{ cursor: "pointer" }}
                        onClick={() => setHotelformvisible(true)}
                    >
                        Create Hotel
                    </div>

                    <div className='p-3 m-2 mt-5'

                    >
                        List Hotel
                    </div>

                </Col>
                <Col md={9} className='border border-start-5'
                    style={{ height: "100vh" }}

                >

                </Col>
            </Row>
        </Container>
    )
}

export default Owner