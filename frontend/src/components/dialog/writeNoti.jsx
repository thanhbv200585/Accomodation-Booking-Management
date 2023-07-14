import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import adminApi from "../../api/adminApi"
import { Form } from 'react-bootstrap'
import { useState } from "react"
import { useParams } from "react-router-dom"

const WriteNoti = ({ visible, onHide }) => {
    const [message, setMessage] = useState('');
    const {id} = useParams()
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };
    const handleSubmit = () => {
        adminApi.sendNoti(id,message)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Dialog
                visible={visible}
                style={{ width: "60vw", maxWidth: "650px" }}
                onHide={onHide}
                header="Write notification"
                footer={
                    <div>
                        <Button label="Cancel" onClick={onHide} className="p-button-secondary" />
                        <Button label="Send" onClick={handleSubmit} />
                    </div>
                }
            >
                <Form>
                    <Form.Group controlId="message">
                        <Form.Control
                            type="text"
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>

            </Dialog>
        </>
    )
}
export default WriteNoti