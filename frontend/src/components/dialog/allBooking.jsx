import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ownerApi from '../../api/ownerApi';

const AllBooking = ({ visible, onHide }) => {
    const [listbooking, setListbooking] = useState([])
    const { id, hotelId } = useParams()
    useEffect(() => {
        try {
            const getAllbooking = async () => {
                const res = await ownerApi.getAllBooking(id, hotelId)
                console.log(res)
                setListbooking(res.data)
            }
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    if (!listbooking)
        return (
            <div>
                Loading...
            </div>
        )
    return (
        <Dialog
            visible={visible}
            style={{ width: '50vw' }}
            className="sm:w-full md:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto"
            onHide={onHide}
            header="All booking"
            footer={
                <div>
                    <Button label="Cancel" onClick={onHide} className="p-button-secondary" />
                    {/* <Button label="Submit" onClick={handleSubmit} /> */}
                </div>
            }
        >
            {listbooking.map((booking) => (
                <div key={booking.bookingId}>
                    <h3>Booking ID: {booking.bookingId}</h3>
                    <p>Name: {booking.nameCustomer}</p>
                    <p>Phone: {booking.phoneCustomer}</p>
                    <p>Check-in: {new Date(booking.dateCheckIn).toLocaleDateString()}</p>
                    <p>Check-out: {new Date(booking.dateCheckOut).toLocaleDateString()}</p>
                    <p>Status: {booking.status}</p>
                    <p>Total Bill: {booking.totalBill}</p>
                    <p>Description: {booking.description}</p>
                    <p>Room IDs: {booking.listRoomId.join(', ')}</p>
                </div>
            ))}

        </Dialog>
    );
};

export default AllBooking;
