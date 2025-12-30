import "../Style/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();


  //handle lmn7e luser
  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/login");        
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="admin-header">
      <h1 className="text-success fw-bold fs-4 mb-0" style={{ fontFamily: 'Trocchi' }}>
        wen nro7
      </h1>

      <div className="admin-actions">
        {user && user.role === "admin" && (
          <>
            <span>Admin</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
