import {useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import ownerApi from "../../api/ownerApi"
import EachRoom from "./EachRoom"

const AllRoom = () =>{
    const {id, hotelId} = useParams()
    const [rooms, setRooms] = useState([])
    const [roomType, setRoomType] = useState({})
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await ownerApi.hotelDetail(id, hotelId)
                // console.log(res.data)
                setRooms(res.data.rooms)
                setRoomType(res.data.roomNumber)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    // console.log(roomType)
    if(!rooms)
    return(
        <div>
            Loading ...
        </div>
    )
    return(
        <div>
            {rooms.map((room, index)=>(
                <EachRoom key={index} room={room} numberRoom={roomType[room.roomType]}/>
            ))}
        </div>
    )
}
export default AllRoom