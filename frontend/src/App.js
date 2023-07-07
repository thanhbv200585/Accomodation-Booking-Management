import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List"
import Login from "./pages/Login"
// import Hotel from "./pages/Hotel"
import Cushome from "./pages/Cushome"
import Cusinfo from "./pages/Cusinfo"
import Owner from "./pages/Owner"
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
        <Route path="/account/:id/info" element={<Cusinfo/>}/>
        <Route path="/owner/:id" element={<Owner/>}/>
        
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/owner/:id/hotel/:hotelId" element={<HotelDetailForOwner/>}/>
        <Route path="/customer/booking/:id" element={<BookingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
