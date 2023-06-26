import { useState, useEffect, useContext } from 'react';
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Cusnavbar from "../../components/navbar/Cusnavbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { useParams, useLocation } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/AuthContext';


const Cushome = () => {
    const location = useLocation();
    const context = useContext(AuthContext)
    console.log(context)
    console.log(location)
    const { id } = useParams();
    console.log(id)
    const [name, setName] = useState('');
    const token = location.state.token
    console.log(token)
    const config = {
        headers: { 
            "Authorization" : "Bearer " + token,
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": ["POST", "GET", "OPTIONS", "DELETE", "PUT"],
            "Access-Control-Allow-Headers": ["append", "delete", "entries", "foreach", "get", "has", "keys", "set", "values", "Authorization"]
        }
    };

    
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
            .then((response) => {
                setName(response.data.name);
                console.log(response.data.name)
            }).catch((error) => {
                console.log(error);
                console.log("lỗi")
            })

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
