import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Managment from "../Components/Managment";
import Add from "../Components/Add";
import Comments from "../Components/Comments";
import Dashboard from "../Components/Dashboard";
import axios from "axios";
import "../Style/AdminPage.css";
import { useNavigate } from "react-router-dom";



export default function AdminPage() {
   const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [places, setPlaces] = useState([]);
  const [stats, setStats] = useState({
    restaurants: 0,
    cafes: 0,
    heritage: 0,
  });
//hun 3m e3ml protect ll login 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      navigate("/login"); 
    }
  }, []);


//hun fetch ll dashboard 3m jeb ldata
  useEffect(() => {
    const fetchStats = async () => {
     try {
  const res = await axios.get("http://localhost:5000/admin/dashboard-stats");
        setStats(res.data);
      } catch (err) {
  console.log(err);
      }
    };
    fetchStats();
  }, []);





//3m e3ml get ll data yle b2lb table place bl DB
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get("http://localhost:5000/admin/places");
        setPlaces(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaces();
  }, []);



  return (
    //hun in same page 
    <div className="admin-page">
      <Header />
      <div className="admin-container">
        <Sidebar setActiveSection={setActiveSection} />
        <main className="admin-main">

          {activeSection === "Dashboard" && <Dashboard stats={stats} />}

          {activeSection === "Managment" && <Managment setSelectedPlaceId={setSelectedPlaceId} />}

          {activeSection === "Add" && <Add />}
          
          {activeSection === "Comments" && (
            <div className="comments-section">
              <h2>Comments</h2>
              <select
                value={selectedPlaceId || ""}
                onChange={(e) => setSelectedPlaceId(e.target.value)}
              >
                <option value="">-- Select Place --</option>
                {places.map((p) => (
                  <option key={p.Place_Id} value={p.Place_Id}>
                    {p.Title}
                  </option>
                ))}
              </select>

              {selectedPlaceId && <Comments placeId={selectedPlaceId} />}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}




