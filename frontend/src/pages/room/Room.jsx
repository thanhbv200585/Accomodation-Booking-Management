import React from "react";
import "./Room.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Room = (props) => {
    console.log(props.data)
    const { service } = props.data
    return props.trigger ? (
        <div className="room">
            <div className="room-inner">
                <button style={{border:"none"}} onClick={() => {props.setTrigger(false)}}>{<FontAwesomeIcon icon={faXmark}/>}</button>
                <h1>{props.data.roomType}</h1>
                {service.map((s) => (
                    <div>{s}</div>
                ))}                
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Room;