import React from "react";

const Left = () => {
    return (
        <div className="col-span-1">
            <div className="w-100 border-2 p-2 rounded-xl">
                <h5 className="font-semibold text-center">Your booking details</h5>
                <div className="flex flex-col">
                    <div className="time grid grid-cols-2 p-2 gap-2">
                        <div className="font-bold border-r border-black">
                            <span className="text-sm">Check-in</span>
                            <div>06/07/2023</div>
                        </div>
                        <div className="font-bold">
                            <span className="text-sm">Check-out</span>
                            <div>06/07/2023</div>
                        </div>
                    </div>
                    <div>
                        <span>Total length of stay</span>
                    </div>
                </div>
                <div className="room-description">Room</div>
            </div>
        </div>
    )
}

const Right = () => {
    return (
        <div className="col-span-2 border">Right</div>
    )
}

const Booking = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-8">
            <Left/>
            <Right/>
        </div>
    )
}

export default Booking