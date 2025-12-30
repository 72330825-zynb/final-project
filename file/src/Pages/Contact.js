import '../Style/Contact.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-page">

      {/* نص الاتصال */}
      <div className="contact-text">
        <h3>Contacts</h3>
        <p>
          We appreciate your feedback <span className="red-heart">♥️</span>
        </p>
        <p>You can share any thoughts, ideas or problems to make us better</p>

        <p className="contact-title">🤘🏻 Contact us:</p>

        <ul className="contact-list">
          <li><span className="contact-label">Gmail</span>: info@tourismlb.com</li>
          <li><span className="contact-label">Whatsapp</span>: 
            <a href="https://chat.whatsapp.com/...." target="_blank" rel="noreferrer">
              https://chat.whatsapp.com/....
            </a>
          </li>
          <li><span className="contact-label">Phone</span>: +961 123 456</li>
        </ul>
      </div>

      {/* Drops الخلفية */}
      <div className="drops">
        {[...Array(7)].map((_, i) => (
          <div key={i} className={`drop drop-${i + 1}`} />
        ))}
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default Contact;
