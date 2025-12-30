import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cafe from './Pages/Cafe';
import Restaurant from './Pages/Restaurant';
import Heritage from './Pages/Heritage';
import AdminPage from './Pages/AdminPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  //hune 7ata e7me l admin ----> storage m3lomat l admin
  const ProtectedAdmin = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/main" element={<Main />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />


        <Route path="/cafe" element={<Cafe />} />

        <Route path="/heritage" element={<Heritage />} />

        <Route path="/restaurant" element={<Restaurant />} />


        <Route path="/admin"
          element={
            <ProtectedAdmin> <AdminPage /> </ProtectedAdmin> }/>



            </Routes>

    </BrowserRouter>
  );
}





export default App;














 