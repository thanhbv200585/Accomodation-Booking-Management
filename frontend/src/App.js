import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List"
import Login from "./pages/Login"
import Cushome from "./pages/Cushome"
import Cusinfo from "./pages/Cusinfo"
import Owner from "./pages/Owner"
import Admin from "./pages/Admin";
import CusHotel from "./pages/CusHotel";
import HotelDetailForOwner from "./pages/HotelDetailForOwner"
import BookingPage from "./pages/booking/BookingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/guest/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/customer/:id" element={<Cushome/>}/>
        <Route path="/customer/:id/hotels" element={<CusHotel/>}/>
        <Route path="/customer/:id/hotels/:hotelId" element={<Hotel/>}/>
        <Route path="/customer/:id/booking/:hotelId" element={<BookingPage/>}/>
        <Route path="/account/:id/info" element={<Cusinfo/>}/>
        <Route path="/owner/:id" element={<Owner/>}/>
        <Route path="/admin/:id" element={<Admin/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:hotelId" element={<Hotel/>}/>
        <Route path="/owner/:id/hotel/:hotelId" element={<HotelDetailForOwner/>}/>
      </Routes>
    </Router>
  );
}

export default App;
