import React from "react";
import { Line } from "react-chartjs-2";
import repository from '../../assets/respiratory rate.png'
import temperature from '../../assets/temperature.png'
import heart from '../../assets/HeartBPM.png'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

const DiagnosisHistory = () => {
  const data = {
    labels: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
    datasets: [
      {
        // Systolic
        label: "Systolic",
        data: [180, 120, 130, 160, 140, 150, 160],
        borderColor: "#d600af",
        backgroundColor: "#d600af",
        tension: 0.4,
      },
      // Diastolic
      {
        label: "Diastolic",
        data: [80, 75, 70, 68, 70, 78],
        borderColor: "#5734ff",
        backgroundColor: "#5734ff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="diagnosis-history">
      <div className="blood-pressure-chart">
        <div className="chart-container">
          <h3>Diagnosis History</h3>
          <div className="headers">
            <span>Blood Pressure</span>
            <span className="range">Last 6 months</span>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="legend">
          <div><span className="dot pink"></span> Systolic <strong>160</strong> <small>Higher than Average</small></div>
          <hr />
          <div><span className="dot blue"></span> Diastolic <strong>78</strong> <small>Lower than Average</small></div>
        </div>
      </div>

      <div className="vitals">
        <div className="vital-card blue">
          <div>
            <img src= { repository } alt="Respiratory" />
            <h4>Respiratory Rate</h4>
            <p className="value">20 bpm</p>
            <p className="status">Normal</p>
          </div>
        </div>

        <div className="vital-card orange">
          <div>
            <img src= { temperature } alt="Temperature" />
            <h4>Temperature</h4>
            <p className="value">98.6°F</p>
            <p className="status">Normal</p>
          </div>
        </div>

        <div className="vital-card pink">
          <div>
            <img src= { heart } alt="Heart Rate" />
            <h4>Heart Rate</h4>
            <p className="value">78 bpm</p>
            <p className="status">Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
