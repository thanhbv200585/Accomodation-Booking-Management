import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Header from "../components/header/Header";



const Hotel = () => {
    const [nameHotel, setNameHotel] = useState('');
    useEffect(() => {
        fetchHotelName(); // Gọi hàm fetchHotelName khi component được render
    }, []);

    const fetchHotelName = async () => {
        try {
            const response = await axios.get('http://localhost:8082/api/guest/hotels/1/detail');
            console.log(1)
            console.log(response)
            const nameHotel = response.data.nameHotel;
            setNameHotel(nameHotel); // Cập nhật giá trị nameHotel
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div>
                a
                {nameHotel}
            </div>
        </div>
    );
};

export default Hotel;
