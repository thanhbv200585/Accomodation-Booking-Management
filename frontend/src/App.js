import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
// import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List"
import Login from "./pages/Login"
import Hotel from "./pages/Hotel"
import Cushome from "./pages/Cushome"
import Cusinfo from "./pages/Cusinfo"
import Edit from "./pages/Edit"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account/:id/info/edit" element={<Edit/>} />
        <Route path="/account/:id/info" element={<Cusinfo/>}/>
        <Route path="/guest/register" element={<RegisterPage />} />
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/customer/:id" element={<Cushome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
