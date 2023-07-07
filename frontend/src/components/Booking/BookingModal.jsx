import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const BookingModal = (props) => {
    console.log(props)
    const { showModal, setShowModal } = props
  return ( 
    showModal && 
    <div className="fixed top-0 left-0 bg-gray-200/[0.5] w-100 h-100 flex justify-center">
      <div className="bg-white relative w-1/2 mx-auto my-auto p-4">
        <button className="absolute top-4 right-4" onClick={() => {setShowModal(false)}}>{<FontAwesomeIcon icon={faXmark}/>}</button>
        <div className="text-center text-lime-500 text-7xl mx-auto my-4">
          <FontAwesomeIcon icon={faCircleCheck}/>
        </div>
        <br/>
        <div  className="font-bold text-3xl mx-auto text-center">
          You booked successfully!
        </div>
      </div>
    </div>
  )

};

export default BookingModal;