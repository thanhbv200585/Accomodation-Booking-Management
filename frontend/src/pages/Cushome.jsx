import { useState, useEffect, useContext } from 'react';
import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Cusnavbar from "../components/Cusnavbar";
import PropertyList from "../components/propertyList/PropertyList";
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';


const Cushome = () => {
    const location = useLocation();
    const context = useContext(AuthContext)
    const { id } = useParams();
    const [name, setName] = useState('')
    
    const token = location.state.token
    console.log("token: ", token)
    const config = {
        headers: { 
            "Authorization" :  `Bearer ${token}`
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8082/api/account/${id}/info`, config)
            .then((response) => {
                console.log("response: ",response)
                setName(response.data.name)
            }).catch((error) => {
                console.log(error)
            })

        };
        fetchData();
    }, [id, token]);
  
    return (
        <div>
              <Cusnavbar token={token} name={name} id={id} />
              <Header />
              <div className="mt-5 d-flex align-items-center gap-3 flex-column">
                <Featured />
                <h1 className="fs-4" style={{width: "1024px"}}>Browse by property type</h1>
                <PropertyList />
                <h1 className="fs-4" style={{width: "1024px"}}>Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
              </div>
        </div>
      );
      
};

export default Cushome;
