import logo from '../../assets/TestLogo@2x.png'
import user from '../../assets/user.png'
import { Home, Users, Calendar, MessageSquare, DollarSign, Settings } from "lucide-react";

export default function Header() {
  return (
    <body>
        <header className="Header">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className="header-nav">
            <ul className="header-nav">
              <li className="nav-item">
                <Home />
                <span>Overview</span>
              </li>
              <li className="nav-item nav-item--active">
                <Users />
                <span>Patients</span>
              </li>
              <li className="nav-item">
                <Calendar />
                <span>Schedule</span>
              </li>
              <li className="nav-item">
                <MessageSquare />
                <span>Messages</span>
              </li>
              <li className="nav-item">
                <DollarSign />
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
            <Settings className="user-settings" />
          </div>
      </header>
    </body>
  )
}