import "../Style/Sidebar.css";

function Sidebar({ setActiveSection }) {
  return (
    <aside className="admin-sidebar">
      <button onClick={() => setActiveSection("Dashboard")}>Dashboard</button>
      <button onClick={() => setActiveSection("Managment")}>Managment</button>
      <button onClick={() => setActiveSection("Add")}>Add Place</button>
      <button onClick={() => setActiveSection("Comments")}>Comments</button>
    </aside>
  );
}

export default Sidebar;