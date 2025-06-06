import React from 'react';
import profile from '../../assets/profile.png'

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={profile}
        alt="Jessica Taylor"
        className="profile-image"
      />
      <h2 className="profile-name">Jessica Taylor</h2>

      <div className="profile-info">
        <div className="info-item">
          <span className="icon">📅</span>
          <div>
            <p className="label">Date Of Birth</p>
            <p className="value">August 23, 1996</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">♀️</span>
          <div>
            <p className="label">Gender</p>
            <p className="value">Female</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">📞</span>
          <div>
            <p className="label">Contact Info.</p>
            <p className="value">(415) 555-1234</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">📟</span>
          <div>
            <p className="label">Emergency Contacts</p>
            <p className="value">(415) 555-5678</p>
          </div>
        </div>

        <div className="info-item">
          <span className="icon">🏥</span>
          <div>
            <p className="label">Insurance Provider</p>
            <p className="value">Sunrise Health Assurance</p>
          </div>
        </div>
      </div>

      <button className="info-button">Show All Information</button>
    </div>
  );
};

export default ProfileCard;
