import React from "react";
import "./Room.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import RoomImageSlider from "../../components/RoomImageSlider/RoomImageSlider";

const Room = (props) => {
    // console.log(props.data)
    const { service } = props.data
    return props.trigger ? (
        <div className="room">
            <div className="room-inner">
                <button style={{border:"none"}} onClick={() => {props.setTrigger(false)}}>{<FontAwesomeIcon icon={faXmark}/>}</button>
                <div className="room-images">
                    <RoomImageSlider data={props.data.images}></RoomImageSlider>
                </div>
                <div className="room-info">
                    <div
                    className="fw-bold fs-4"
                    >Room Type:
                    </div>
                    {props.data.roomType.toUpperCase()}
                    <div className="fw-bold fs-4">
                    All services
                    </div>
                    <div className="room-services">
                        {service.map((s) => (
                            <div className="room-service">{s.toUpperCase()}</div>
                        ))} 
                    </div>
                </div>
                               
            </div>
        </div>
    ) : ""
}

export default Room;