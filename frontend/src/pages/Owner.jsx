import { useState } from 'react'
import { Container} from 'react-bootstrap'
import CreateHotelForm from "../components/dialog/CreactHotelForm"

import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons

import Listhotel from '../components/Listhotel'
import Navbar from '../components/Navbar'

const Owner = () => {
    const [hotelformvisible, setHotelformvisible] = useState(false)
    const [listhotel, setListhotel] = useState(true)
    // const [add, setAdd] =useState()

    const handlehotelformhile = () => {
        setHotelformvisible(false)
    }

    return (
        <>
            <Navbar/>
            <CreateHotelForm
                visible={hotelformvisible} onHide={handlehotelformhile}
            />


            <Container className='d-flex'>
                {/* //sidebar */}
                <div className='position-fixed'
                style={{ width: "20vw",  overflowY: "auto"}}>
                    <div className='p-3 m-2 mt-5'
                        style={{ cursor: "pointer" }}
                        onClick={() => setHotelformvisible(true)}
                    >
                        Create Hotel
                    </div>
                    <div className='p-3 m-2 mt-5'
                        style={{ cursor: "pointer" }}
                        onClick={()=>setListhotel(!listhotel)}
                    >
                        List Hotel
                    </div>
                </div>
                {/* //main */}
                <div className='mt-5'
                    style={{ width: "60vw", overflowY: "auto", marginLeft:"20vw" }}
                >
                   {
                    listhotel && <Listhotel/>
                   }
                </div>

            </Container>
        </>

    )
}

export default Owner