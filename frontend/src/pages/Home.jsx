import Featured from "../components/featured/Featured";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MailList from "../components/mailList/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/propertyList/PropertyList";



//trang chủ khi vào web
const Home = () => {
  localStorage.removeItem("user")
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="mt-5 d-flex align-items-center gap-3 flex-column">
        <Featured/>
        <h1 className="fs-4" style={{width: "1024px"}}>Browse by property type</h1>
        <PropertyList/>
        <h1 className="fs-4" style={{width: "1024px"}}>Homes guests love</h1>
        {/* <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
