import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from "react-router-dom";
const BookingModal = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(props)
    const { showModal, setShowModal } = props
    const handleClick = () =>{
      setShowModal(false)
      navigate(`/customer/${id}`)
      window.scrollTo(0, 0)
    }
  return ( 
    showModal && 
    <div className="fixed top-0 left-0 bg-gray-200/[0.5] w-100 h-100 flex justify-center">
      <div className="bg-white relative w-1/2 mx-auto my-auto p-4">
        <div className="text-center text-lime-500 text-7xl mx-auto my-4">
          <FontAwesomeIcon icon={faCircleCheck}/>
        </div>
        <br/>
        <div  className="font-bold text-3xl mx-auto text-center">
          You booked successfully!
        </div>
        <div className="text-center fs-5 mt-4">
        <button className="btn btn-outline-success"
        style={{width:"100px"}}
        onClick={handleClick}>OK</button>
        </div>
      </div>
    </div>
  )

};

export default BookingModal;