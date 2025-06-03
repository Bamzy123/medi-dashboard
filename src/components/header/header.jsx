import React from 'react';
import logo from '../../assets/TestLogo@2x.png'
import user from '../../assets/user.png'
import { Home, Users, Calendar, MessageSquare, DollarSign, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className="header-nav">
        <ul>
          <li className="nav-item">
            <Home size={20} />
            <span>Overview</span>
          </li>
          <li className="nav-item nav-item--active">
            <Users size={20} />
            <span>Patients</span>
          </li>
          <li className="nav-item">
            <Calendar size={20} />
            <span>Schedule</span>
          </li>
          <li className="nav-item">
            <MessageSquare size={20} />
            <span>Messages</span>
          </li>
          <li className="nav-item">
            <DollarSign size={20} />
            <span>Transactions</span>
          </li>
        </ul>
      </nav>

      {/* RIGHT: User Info + Settings */}
      <div className="header-right">
        <img src={user} alt="user" className='user-avatar'/>
        <div className="user-info">
          <span className="user-name">Dr. Jose Simmons</span>
          <span className="user-role">General Practitioner</span>
        </div>
        <Settings size={20} className="user-settings" />
      </div>
    </header>
  )
}