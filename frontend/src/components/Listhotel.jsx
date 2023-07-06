
import { useState, useEffect } from "react"
import ownerApi from "../api/ownerApi"
import { useParams } from "react-router-dom"
import Eachhotel from "./Eachhotel"

const Listhotel = ()=>{
    const [hotels, setHotels] = useState([])

    const {id} = useParams()
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await ownerApi.listHotel(id,0,100)
            //   const data = response.data
            setHotels(response.data)
            //   console.log(data)
            } catch (error) {
              console.error('Error:', error);
            }
          };
         fetchData()
      
    },[])
    if(!hotels)
    return(
        <div>
            Loading....
        </div>
    )

    return(
        <>
            {hotels.map((hotel, index)=>(
                <Eachhotel item={hotel} key={index}/>
            ))}
        </>

    )
}
export default Listhotel