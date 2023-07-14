import { useContext } from 'react';
import Featured from "../components/featured/Featured";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import PropertyList from "../components/propertyList/PropertyList";
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Cushome = () => {
    // const { id } = useParams();
    
    const {user} = useContext(AuthContext)
    console.log("user: ",user)
   
    return (
        <div>
              <Navbar/>
              <Header />
              <div className="mt-5 d-flex align-items-center gap-3 flex-column">
                <Featured />
                <h1 className="text-xl font-bold" style={{width: "1024px"}}>Homes guests love</h1>
                <PropertyList />
                <MailList />
                <Footer />
              </div>
        </div>
      );
      
};

export default Cushome;
