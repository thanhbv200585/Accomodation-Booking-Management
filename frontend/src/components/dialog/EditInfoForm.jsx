import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import ownerApi from '../../api/ownerApi';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import accountApi from '../../api/accountApi';


const EditInfoForm = ({ visible, onHide }) => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: ''
    });
    const { id } = useParams();


    useEffect(() => {
        const getOldData = async () => {
            try {
                const res = await accountApi.infor(id)
                setFormData(res.data)
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        getOldData()
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
            const response = await accountApi.update(id, formData)
            localStorage.setItem("username",formData.name)
            window.location.reload()
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
    return (
        <Dialog
            visible={visible}
            style={{ width: '60vw' }}
            // className="sm:w-full md:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto"
            onHide={onHide}
            header="Edit information"
            footer={
                <div>
                    <Button label="Cancel" onClick={onHide} className="p-button-secondary" />
                    <Button label="Submit" onClick={handleSubmit} />
                </div>
            }
        >
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </Form.Group>
        </Dialog>
    );
};

export default EditInfoForm;
