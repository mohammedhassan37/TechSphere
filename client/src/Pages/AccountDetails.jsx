import { useState } from "react";
import '../styles/AccountDetails.css'

function AccountDetails(){
    const [email, setEmail] = useState("john.doe@example.com");
    const [activeTab, setActiveTab] = useState("settings");
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({
      name: "John Doe",
      email: "john.doe@example.com",
      location: "San Francisco, CA"
    });
    
    return(
        <>
            <div className="AccountDetailsIntro">
                <h1>Account Details</h1>
                <p>Mange your profile and preferences.</p>
            </div>
            <div className="AccountDetailsMain">
                <div className="AccountDetailsMainInfo">
                {showForm ? (
                  <div className="edit-profile-form">
                    <input type="text" placeholder="Name"  value={userData.name} 
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}/>

                    <input type="email" placeholder="Email" value={userData.email} 
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>

                    <input type="text" placeholder="Location" value={userData.location}
                    onChange={(e) => setUserData({ ...userData, location: e.target.value })}/>

                    <div className="form-button">
                      <button onClick={() => setShowForm(false)}>
                        Save Changes
                      </button>

                    </div>
                  </div>
                ) :(
                  <div className="profile-info">
                    <div className="profile-name-row">
                      <h3>{userData.name}</h3>
                      <span className="verified">Verified</span>
                    </div>

                    <p className="profile-email">{userData.email}</p>

                    <div className="profile-meta">
                      <span>📍 {userData.location}</span>
                      <span>📅 Joined March 2026</span>
                    </div>
                  </div>
                )}  
                </div>
                <div className="AccountDetailsEdit" onClick={() => setShowForm(true)}>
                    ⚙️ Edit Profile
                </div>
            </div>

            <div className="AccountDetailsSelections" >
                <div
    className={`tab ${activeTab === "settings" ? "active" : ""}`}
    onClick={() => setActiveTab("settings")}
  >
    Settings
  </div>

  <div
    className={`tab ${activeTab === "reviews" ? "active" : ""}`}
    onClick={() => setActiveTab("reviews")}
  >
    My Reviews
  </div>
            </div>


            {activeTab === "settings" && (
                <>
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
            )}

            {activeTab === "reviews" && (
  <div className="reviews-section">

    <div className="reviews-header">
      <div>
        <h2>My Reviews</h2>
        <p>View and manage your product reviews</p>
      </div>
        <button className="write-review">Write a Review</button>
    </div>

    <div className="review-card">
      <div className="review-top">
        <div>
          <h4>Premium Wireless Headphones <span className="tag">Product</span></h4>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

        <div className="review-actions">
          <button>Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>

      <p className="review-title">Excellent sound quality!</p>
      <p className="review-content">
        These headphones exceeded my expectations. The noise cancellation is superb and the battery life is impressive.
      </p>
      <span className="review-date">Reviewed on February 15, 2026</span>
    </div>
    </div>
           )}
        </>
           
    )
}

export default AccountDetails;