import { Search } from "lucide-react"
import layer8 from '../../assets/Layer 8.png'
import layer1 from '../../assets/Layer 1.png'
import layer3 from '../../assets/Layer 3.png'
import layer2 from '../../assets/profile.png'
import layer6 from '../../assets/Layer 6.png'
import layer12 from '../../assets/Layer 12.png'
import layer10 from '../../assets/Layer 10.png'
import layer9 from '../../assets/Layer 9.png'
import layer4 from '../../assets/Layer 4.png'
import layer5 from '../../assets/Layer 5.png'
import layer7 from '../../assets/Layer 7.png'
import layer20 from '../../assets/Layer 20.png'
import React from "react";

const patients = [
  { name: "Emily Williams", gender: "Female", age: 18, img: layer8 },
  { name: "Ryan Johnson", gender: "Male", age: 45, img: layer1 },
  { name: "Brandon Mitchell", gender: "Male", age: 36, img: layer3 },
  { name: "Jessica Taylor", gender: "Female", age: 29, img: layer2, active: true },
  { name: "Samantha Johnson", gender: "Female", age: 56, img: layer6 },
  { name: "Ashley Martinez", gender: "Female", age: 54, img: layer12 },
  { name: "Olivia Brown", gender: "Female", age: 32, img: layer10 },
  { name: "Tyler Davis", gender: "Male", age: 19, img: layer9 },
  { name: "Kevin Anderson", gender: "Male", age: 30, img: layer4 },
  { name: "Dylan Thompson", gender: "Male", age: 36, img: layer5 },
  { name: "Nathan Evans", gender: "Male", age: 58, img: layer7 },
  { name: "Mike Nolan", gender: "Male", age: 31, img: layer20 }
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
