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
        const getAllbooking = async () => {
            try {
                const res = await ownerApi.getAllBooking(id, hotelId)
                console.log(res)
                setListbooking(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getAllbooking()
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
                <div className='d-flex m-2 border-5 justify-content-around'>
                    <div
                        key={booking.bookingId}>
                        {/* <h3>Booking ID: {booking.bookingId}</h3> */}
                        <p><b>Name:</b> {booking.nameCustomer}</p>
                        <p><b>Phone:</b> {booking.phoneCustomer}</p>
                        <p><b>Check-in:</b> {new Date(booking.dateCheckIn).toLocaleDateString()}</p>
                        <p><b>Check-out:</b> {new Date(booking.dateCheckOut).toLocaleDateString()}</p>
                        {/* <p>Status: {booking.status}</p> */}
                        <p><b>Total Bill:</b> {booking.totalBill} đ</p>
                        <p><b>Description:</b> {booking.description}</p>
                        <p><b>Room IDs:</b> {booking.listRoomId.join(', ')}</p>
                    </div>
                    <div
                    className='d-flex justify-content-center align-items-center'
                    >
                        <Button
                        severity="danger"
                        label='Delete'
                        />
                    </div>
                </div>
            ))}

        </Dialog>
    );
};

export default AllBooking;
