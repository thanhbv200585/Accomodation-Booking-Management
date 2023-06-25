import { useState, useEffect } from 'react';
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Cusnavbar from "../../components/navbar/Cusnavbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';


const Cushome = () => {
    const location = useLocation();
    const { id } = useParams();
    console.log(id)
    const [name, setName] = useState('');
    const token = location.state.token;
    console.log(token)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(1);
                const response = await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
                const { name } = response.data.name
                setName(name);
                console.log(response.data.name)
            } catch (error) {
                // console.log(id, token)
                console.log(error);
                console.log("lỗi")
            }
        };

        fetchData();
    }, [id, token]);
  
    return (
        <div>
            <Cusnavbar name={name}/>
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};

export default Cushome;
