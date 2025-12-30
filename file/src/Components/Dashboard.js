import React from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import "../Style/Dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

function Dashboard({ stats }) {
  // بيانات Pie Chart: توزيع الأماكن حسب النوع
  const pieData = {
    labels: ["Restaurants", "Cafes"],
    datasets: [{
      data: [stats.restaurants, stats.cafes],
      backgroundColor: ["#16a085", "#1abc9c"],
      borderWidth: 1,
    }]
  };

  
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{
      label: "number of comment monthly",
      data: [5, 10, 7, 12, 8],
      backgroundColor: "#16a085",
      borderColor: "#16a085",
      borderWidth: 2,
      tension: 0.3,
    }]
  };

 
  const barData = {
    labels: ["Restaurants", "Cafes"],
    datasets: [{
      label: "number of places",
      data: [stats.restaurants, stats.cafes],
      backgroundColor: "#16a085",
    }]
  };

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="card">
          <h3>Restaurants</h3>
          <p>{stats.restaurants}</p>
        </div>
        <div className="card">
          <h3>Cafes</h3>
          <p>{stats.cafes}</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-box">
          <h4>Pie Chart</h4>
          <Pie data={pieData} />
        </div>
        <div className="chart-box">
          <h4>Line Chart</h4>
          <Line data={lineData} />
        </div>
        <div className="chart-box">
          <h4>Bar Chart</h4>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;