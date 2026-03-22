import { useState } from "react";
import '../styles/AccountDetails.css'

function AccountDetails(){
    const [email, setEmail] = useState("john.doe@example.com");
    return(
        <>
            <div className="AccountDetailsIntro">
                <h1>Account Details</h1>
                <p>Mange your profile and preferences.</p>
            </div>
            <div className="AccountDetailsMain">
                <div className="AccountDetailsMainInfo">

    <div className="profile-info">
      <div className="profile-name-row">
        <h3>John Doe</h3>
        <span className="verified">Verified</span>
      </div>

      <p className="profile-email">john.doe@example.com</p>

      <div className="profile-meta">
        <span>📍 San Francisco, CA</span>
        <span>📅 Joined March 2024</span>
      </div>
    </div>
                </div>
                <div className="AccountDetailsEdit">
                    ⚙️ Edit Profile
                </div>
            </div>

            <div className="AccountDetailsSelections" >
                <div className="AccountDetailsReviews">
                <p>Settings</p>
                </div>
                <div className="AccountDetailsSettings">
                <p>My Reviews</p>
                </div>
            </div>

            <div className="AccountDetailsEmail">
                <p>✉️</p>
                <p>Email Address</p>
                <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="email-input"
  />

  <button className="edit-email-button">Save</button>
            </div>

            <div className="AccountDetailsPassword">
                <p>🔑</p>
                <p>Security</p>
                <button>Change password</button>
            </div>

            <div className="AccountDetailsDeleteAccount">
                <div className="danger-zone">
                <p>Danger Zone</p>
                <p>Permanently delete your account.</p>
                </div>
                <button className="delete-button">Delete Account</button>
            </div>
           
        </>
    )
}

export default AccountDetails;