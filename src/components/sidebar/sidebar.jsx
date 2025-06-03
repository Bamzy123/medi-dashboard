import { Search } from "lucide-react"

import React from "react";

const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, img: "https://i.pravatar.cc/150?img=1" },
  { name: "Ryan Johnson", gender: "Male", age: 45, img: "https://i.pravatar.cc/150?img=2" },
  { name: "Brandon Mitchell", gender: "Male", age: 36, img: "https://i.pravatar.cc/150?img=3" },
  { name: "Jessica Taylor", gender: "Female", age: 29, img: "https://i.pravatar.cc/150?img=4", active: true },
  { name: "Samantha Johnson", gender: "Female", age: 56, img: "https://i.pravatar.cc/150?img=5" },
  { name: "Ashley Martinez", gender: "Female", age: 54, img: "https://i.pravatar.cc/150?img=6" },
  { name: "Olivia Brown", gender: "Female", age: 32, img: "https://i.pravatar.cc/150?img=7" },
  { name: "Tyler Davis", gender: "Male", age: 19, img: "https://i.pravatar.cc/150?img=8" },
  { name: "Kevin Anderson", gender: "Male", age: 30, img: "https://i.pravatar.cc/150?img=9" },
  { name: "Dylan Thompson", gender: "Male", age: 36, img: "https://i.pravatar.cc/150?img=10" },
  { name: "Nathan Evans", gender: "Male", age: 58, img: "https://i.pravatar.cc/150?img=11" }
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Patients</h3>
        {/* <input type="text" placeholder="Search" className="search-input" /> */}
        < Search />
      </div>
      <div className="patient-list">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`patient-item ${patient.active ? "active" : ""}`}
          >
            <img src={patient.img} alt={patient.name} className="avatar" />
            <div className="patient-info">
              <div className="name">{patient.name}</div>
              <div className="details">
                {patient.gender} • {patient.age}
              </div>
            </div>
            <div className="menu-icon">⋯</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
