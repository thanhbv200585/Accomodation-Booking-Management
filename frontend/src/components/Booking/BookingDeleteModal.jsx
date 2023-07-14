import React, {useState, useEffect } from "react";
import customerApi from "../../api/customerApi";
import { useParams } from "react-router-dom";

const BookingDeleteModal = (props) => {
    const { id } = useParams()
    const { showModal, setShowModal, bookingId } = props;
    const [reason, setReason] = useState("")
    const handleCancelClick = () => {
        setShowModal(false);
    }

    const handleClick = () => {
        console.log(reason);
        customerApi.cancelBookingByCustomer(id, bookingId, reason).then((res) => {
            console.log(res);
        });
        setShowModal(false);
    }
    const handleChange = (e) => {
        e.preventDefault();
        setReason(e.target.value);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.keyCode === 27) { // keyCode for "Esc" key is 27
            setShowModal(false);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    return (
        showModal && 
        <div className="fixed top-0 left-0 bg-gray-200/[0.5] w-100 h-100 flex justify-center">
            <div className="bg-white relative w-1/2 mx-auto my-auto p-4 flex flex-col items-center gap-2">
                <div className="font-bold text-xl m-2 text-red-600">Are you sure to cancel this booking?</div>
                <div className="w-2/3">
                    <textarea placeholder="Give us a reason ..." className="w-100 p-2 h-[100px] border-0"
                            onChange={handleChange} value={reason}>

                    </textarea>
                </div>
                <div className="font-semibold">
                    <button className="rounded mr-10 w-24 border-1 p-1 bg-neutral-200" onClick={handleClick}>OK</button>
                    <button className="rounded w-24 border-1 p-1 bg-red-600" onClick={handleCancelClick}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default BookingDeleteModal; 