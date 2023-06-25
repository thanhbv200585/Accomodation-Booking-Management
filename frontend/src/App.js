import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Hotel from "./pages/Hotel";
import Cushome from "./pages/home/Cushome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/guest/register" element={<RegisterPage />} />
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/1/detail" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/customer/:id" element={<Cushome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
