
import "../Style/Home.css";
import logo_21 from '../Assets/logo_21.png';
import resizecom_Lebanon from '../Assets/resizecom_Lebanon.jpeg';
import sign from '../Assets/sign.jpg';
import story from '../Assets/story.jpeg';
import "../Style/Button.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login"); 
  };
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="homebackground">
        <Container fluid className="pt-4">


    

    
   

          {/* Header Logo + Title */}
          <Row className="align-items-center mb-5">
            <Col xs="auto" className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <div className="p-3 rounded-circle bg-light d-inline-block">
                <Image src={logo_21} fluid style={{ width: '80px', height: 'auto' }} />
              </div>
            </Col>
<Col className="d-flex align-items-center justify-content-center justify-content-md-start">
  <div className="d-flex align-items-center">
    <h1 className="text-success fw-bold fs-4 mb-0" style={{ fontFamily: 'Trocchi' }}>wen nro7</h1>
    
    <Link to="/login" className="mb-0 ms-5 fs-5" style={{ color: "#48cc69", fontFamily: 'Lexend Deca', textDecoration: 'none', cursor: 'pointer' }}>
      login
    </Link>

    <Link to="/contact" className="mb-0 ms-4 fs-5" style={{ color: "#48cc69", fontFamily: 'Lexend Deca', textDecoration: 'none', cursor: 'pointer' }}>
      contact
    </Link>

    <Link to="/about" className="mb-0 ms-4 fs-5" style={{ color: "#48cc69", fontFamily: 'Lexend Deca', textDecoration: 'none', cursor: 'pointer' }}>
      About Us
    </Link>
  </div>
</Col>




          </Row>





          {/* Intro paragraph */}
          <Row className="justify-content-center mb-5">
            <Col xs={12} md={8} className="text-center">
              <p className="fs-5" style={{ color: "#bedfccff", fontFamily: 'Trocchi' }}>
                No plans? No problem! Discover unique places near you with{" "}
                <span className="fw-bold text-success">Wen Nro7</span> — just click a button and get instant inspiration!
              </p>
            </Col>
          </Row>

        {/* first Section */}
          <Row className="align-items-center mb-5 flex-column flex-md-row-reverse">
            <Col xs={12}
             md={{span:6, offset:1}} 
             className=" text-center text-md-start   d-flex flex-column justify-content-center ">
            <h1
                  className="fw-bold mb-3 text-success" 
                  style={{
                    textAlign:"center",
                    color:"#08o8032",
                    fontFamily:"Trocchi",
                    fontSize:"2rem"
                  }}> Explore Lebanon Awaits </h1>
              <h2  className="fs-5"
               style={{ color: "#a3e4bdff", fontFamily: 'Trocchi', lineHeight:"1.6" , padding:"0 2rem"}}>
               "No worries about choosing your destination in Lebanon! Discover everything you need — enchanting nature trails, breathtaking viewpoints, fascinating historic sites, and unexpected surprises waiting for you!
              </h2>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
              <Image src={resizecom_Lebanon} fluid rounded />
            </Col>
          </Row>





          {/* Second Section */}
          <Row className="align-items-center mb-5 flex-column-reverse flex-md-row">
            <Col xs={12}
             md={{span:6, offset:1}} 
             className="d-flex align-items-center mb-4 mb-md-0">
                <h2 className="text-success fw-bold fs-3 mb-3"> Every place has a story —<br />unlock it </h2>
              <h2  className="fs-5" style={{ color: "#a3e4bdff", fontFamily: 'Trocchi', lineHeight:"1.6" , padding:"0 2rem"}}>
                "Discover your options easily and enjoyably! Our website guides you through a series of simple questions, leading you to experiences and places you might not expect, helping you find what truly suits your interests and style every time."
              </h2>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end mb-4 mb-md-0">
              <Image src={sign} fluid rounded />
            </Col>
          </Row>





         
          <Row className="align-items-center mb-5 flex-column flex-md-row-reverse">
            <Col xs={12}
             md={{span:6, offset:1}} 
             className="d-flex align-items-center mb-4 mb-md-0">
              <h2  className="fs-5" style={{ color: "#a3e4bdff", fontFamily: 'Trocchi', lineHeight:"1.6" , padding:"0 2rem"}}>
               Every place can hide a new experience and a unique story, so when we decide where to go, we’re not just choosing a destination—we’re opening the door to discovering memories, sights, and cultures that can transform our day and make every moment full of joy and meaning.
              </h2>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end mb-4 mb-md-0 ">
              <Image src={story} fluid rounded />
            </Col>
          </Row>















          {/* Button Centered */}
          <Row className="justify-content-center mt-5">
            <Col xs="auto" className="text-center">
               <Button
        variant="success"
        size="lg"
        className="shadow px-4 py-2 fw-bold rounded-pill custom-btn"
        onClick={handleStartClick} 
      >
        Let’s Start
      </Button>
            </Col>
          </Row>
          

        </Container>
        
   <div className="drops">
  {[...Array(7)].map((_, i) => (
    <div key={i} className={`drop drop-${i + 1}`} />
  ))}
</div>



      </div>
    </div> 
    
    
    );
    }
 

export default Home;