import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./RoomImageSlider.css"
import { useState } from 'react'

const RoomImageSlider = ({data}) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    return (
        <div className='room-slider'>
            <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
            {data.map((img, index) => (
                <img src={img} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
            ))}
            <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        </div>
    )
}

export default RoomImageSlider;