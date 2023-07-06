import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import ownerApi from '../../api/ownerApi';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import guestApi from '../../api/guestApi';
import axios from 'axios';


const EditHotelForm = ({ visible, onHide }) => {

    const [formData, setFormData] = useState({
        nameHotel: '',
        location: '',
        shortDescription: '',
        detailDescription: '',
        assess: '',
        avatarHotel: ''
    });
    // console.log(formData.nameHotel)
    const { id, hotelId } = useParams();
    // console.log(id, hotelId)
    const token = localStorage.getItem("TOKEN")
    console.log(token)
    useEffect(() => {
        const getDataHotel = async () => {
            try {
                const res = await guestApi.viewHotelDetail(hotelId)
                setFormData(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getDataHotel()
    }, [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await ownerApi.updateHotel(id, hotelId, formData);
            // const response = await axios.put(`http://localhost:8082/api/owner/${id}/${hotelId}/updateHotel`, formData, config)
            console.log(response);

        } catch (error) {
            console.log(error);
        }
        onHide();
    };
    if (!formData)
        return (
            <div>
                Loading...
            </div>
        )
    // console.log(formData)
    return (
        <Dialog
            visible={visible}
            style={{ width: '50vw' }}
            className="sm:w-full md:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto"
            onHide={onHide}
            header="Edit Hotel"
            footer={
                <div>
                    <Button label="Cancel" onClick={onHide} className="p-button-secondary" />
                    <Button label="Submit" onClick={handleSubmit} />
                </div>
            }
        >
            <Form.Group controlId="nameHotel">
                <Form.Label>Name of the Hotel:</Form.Label>
                <Form.Control
                    type="text"
                    name="nameHotel"
                    value={formData.nameHotel}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="location">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="shortDescription">
                <Form.Label>Short Description:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="detailDescription">
                <Form.Label>Detail Description:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    name="detailDescription"
                    value={formData.detailDescription}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="assess">
                <Form.Label>Assess:</Form.Label>
                <Form.Control
                    type="text"
                    name="assess"
                    value={formData.assess}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="avatarHotel">
                <Form.Label>Avatar of the Hotel:</Form.Label>
                <Form.Control
                    type="text"
                    name="avatarHotel"
                    value={formData.avatarHotel}
                    onChange={handleChange}
                />
            </Form.Group>

        </Dialog>
    );
};

export default EditHotelForm;
