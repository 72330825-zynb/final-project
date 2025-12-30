import mountain from '../Assets/mountain.jpg';// awl sora t3olet overly
import "../Style/Main.css";
import SearchIcon from '@mui/icons-material/Search';// search icon
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AreaDropdown from '../Components/AreaDropdown';
import CategoriesIcon from '../Components/CategoriesIcon';
import CarouselImage from '../Components/Carousel';
import Destination from '../Components/Destination';



export default function HeroImage() {
  
  const navigate = useNavigate();

  const handleFilterClick = (page) => {
     const area = document.getElementById("area-select").value;
     const price = document.getElementById("price-select").value;
     navigate(`/${page}?area=${area}&price=${price}`);
  }

  return (
    <>
    <Navbar/>
    <div>
      <div className="hero-container">

        {/* Background Image */}
        <img src={mountain} className="hero-img" />

        {/* Overlay Title */}
        <div className="overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white text-center" style={{ marginTop: "50px" }}>
            Find Nearby Places & Things
          </h1>

          {/* Search Bar */}
          <div className="search-bar">

          <AreaDropdown/>
         

            <span className="v-line"></span>

            <input type="text" placeholder="Enter a location" />

            <span className="v-line"></span>

            <select id='price-select'>
              <option>Price Range</option>
              <option>$10 - $50</option>
              <option>$50 - $100</option>
              <option>$200+</option>
            </select>

            <span className="v-line"></span>

            <div className="search-button-area">
              <div className='icon-circle' style={{
                color: 'white',
                boxShadow: "0 4px 10px rgba(219, 210, 210, 0.1)",
                background:"#a3e4bdff"
              }}>
                <SearchIcon />
              </div>
              <button className="search-btn" style={{ fontSize:"14px" }}>
                Search Now
              </button>
            </div>
          </div>

          {/* Filter Icons */}
           <CategoriesIcon onSelect={(category) => handleFilterClick(category)} />
        </div>
      </div>
    
<div className="full-width-section">
  <div className="carousel-container">

    <p className="carousel-title">
      YOUR JOURNEY BEGINS HERE —————————————————————————————————————— CHOOSE YOUR FIRST STEP
    </p>

    <CarouselImage/>

  </div>
</div>
<Destination />
</div> 
<Footer/>
</>
  );
}

