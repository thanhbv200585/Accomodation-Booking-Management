import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Form} from 'react-bootstrap'
import ownerApi from '../../api/ownerApi';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';


const CreateHotelForm = ({ visible, onHide }) => {
  const [formData, setFormData] = useState({
    nameHotel: '',
    location: '',
    shortDescription: '',
    detailDescription: '',
    assess: '',
    avatarHotel: ''
  });
  const [initialFormData] = useState({ ...formData })

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ownerApi.newHotel(id, formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setFormData({ ...initialFormData })
    onHide();
  };

  return (
    <div>
      <Dialog
        visible={visible}
        style={{ width: '50vw' }}
        className="sm:w-full md:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto"
        onHide={onHide}
        header="Create new hotel"
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
            style={{ width: '300px' }}
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={{ width: '300px' }}
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
            style={{ width: '300px' }}
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
            style={{ width: '300px' }}
          />
        </Form.Group>
        <Form.Group controlId="assess">
          <Form.Label>Assess:</Form.Label>
          <Form.Control
            type="text"
            name="assess"
            value={formData.assess}
            onChange={handleChange}
            style={{ width: '300px' }}
          />
        </Form.Group>
        <Form.Group controlId="avatarHotel">
          <Form.Label>Avatar of the Hotel:</Form.Label>
          <Form.Control
            type="text"
            name="avatarHotel"
            value={formData.avatarHotel}
            onChange={handleChange}
            style={{ width: '300px' }}
          />
        </Form.Group>
        
      </Dialog>
    </div>
  );
};

export default CreateHotelForm;
