import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { Form } from 'react-bootstrap'
import ownerApi from '../../api/ownerApi'

const NewRoomForm = ({ visible, onHide }) => {

    const {id,hotelId} = useParams()
    const [formData, setFormData] = useState({
        roomType: 'small',
        price: 200,
        description: '',
        service: [],
        numberRooms: 3
      });


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

      const handleServiceChange = (event) => {
        const { value, checked } = event.target;
        setFormData((prevFormData) => {
          if (checked) {
            return {
              ...prevFormData,
              service: [...prevFormData.service, value]
            };
          } else {
            return {
              ...prevFormData,
              service: prevFormData.service.filter((item) => item !== value)
            };
          }
        });
      };

    
    const handleSubmit = async (e) => {
        console.log(formData);
        try{
            const res = await ownerApi.createRoom(id, hotelId, formData)
            console.log(res)
            console.log("tao phong thanh cong")
            onHide()
        }
        catch(err){
            console.log(err)
        }

    }
    return (
        <Dialog
            visible={visible}
            style={{ width: "60vw" }}
            onHide={onHide}
            header="Create Rooms"
            footer={
                <div>
                    <Button label="Cancel" onClick={onHide} className="p-button-secondary" />
                    <Button label="Submit" onClick={handleSubmit} />
                </div>
            }
        >
            <Form>
                <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control
                        as="select"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleInputChange}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="service">
                    <Form.Label>Service</Form.Label>
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="food"
                            label="Food"
                            value="food"
                            checked={formData.service.includes('food')}
                            onChange={handleServiceChange}
                        />
                    </div>
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="drink"
                            label="Drink"
                            value="drink"
                            checked={formData.service.includes('drink')}
                            onChange={handleServiceChange}
                        />
                    </div>
                </Form.Group>

                <Form.Group controlId="numberRooms">
                    <Form.Label>Number of Rooms</Form.Label>
                    <Form.Control
                        type="number"
                        name="numberRooms"
                        value={formData.numberRooms}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
        </Dialog>
    )
}
export default NewRoomForm