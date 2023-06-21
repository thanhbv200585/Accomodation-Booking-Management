import React from "react";
import icon from "../assets/img/people.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const People = () => {
    return (
        <>
            <button className="people">
                <span>
                    <img src={icon} style={{height:"20px", width:"20px", color:"#333", display:"absolute"}}/>
                </span>
                    2 adults - 0 children - 1 room
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </>
    )   
}

export default People;