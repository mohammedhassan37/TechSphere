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
    const [reviews, setReviews] = useState([
      {
        id: 1,
        product: "Premium Wireless Headphones",
        stars: 5,
        title: "Excellent sound quality!",
        content: "These headphones exceeded my expectations...",
        date: "February 15, 2026"
      },
    ]);
    const deleteReview = (deleteReview) => {
    const updatedReviews = reviews.filter(review => review.id != deleteReview);
    setReviews(updatedReviews);
    };
    

    const [writeReviewForm, setWriteReviewForm] = useState({ product: "", title: "", content: "", stars: 5 });
    const [showWriteReviewForm, setShowWriteReviewForm] = useState(false);

    const [editReviewId, setEditReviewId] = useState(null);
    const [reviewForm, setReviewForm] = useState({ title: "", content: "" });

    const startEditReview = (review) => {
      setEditReviewId(review.id);
      setReviewForm({ title: review.title, content: review.content });
    };

    const saveReview = () => {
      setReviews(reviews.map(r =>
      r.id === editReviewId ? { ...r, ...reviewForm } : r));
      setEditReviewId(null);
      setReviewForm({ title: "", content: "" });
    };
    
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

{showWriteReviewForm && (
  <div className="write-review-form">
    <label>Product Name:</label>
    <input type="text" placeholder="Product Name" value={writeReviewForm.product}
      onChange={(e) => setWriteReviewForm({ ...writeReviewForm, product: e.target.value })}/>

    <label>Title:</label>
    <input type="text" placeholder="Review Title" value={writeReviewForm.title}
      onChange={(e) => setWriteReviewForm({ ...writeReviewForm, title: e.target.value })} />

    <label>Write a description:</label>
    <textarea placeholder="Review Description" value={writeReviewForm.content}
      onChange={(e) => setWriteReviewForm({ ...writeReviewForm, content: e.target.value })}/>

    <label>How many stars would you give it? 1-5</label>
    <input type="number" min="1" max="5" value={writeReviewForm.stars}
      onChange={(e) => setWriteReviewForm({ ...writeReviewForm, stars: parseInt(e.target.value) })}/>
      
    <div className="form-buttons">
      <button onClick={() => {setReviews([...reviews, {id: 2 , ...writeReviewForm,
        date: new Date().toLocaleDateString("en-GB", { month: "long", day: "numeric", year: "numeric" })}]);
        setShowWriteReviewForm(false);
        setWriteReviewForm({ product: "", title: "", content: "", stars: 5 });
      }}>Submit</button>

      <button onClick={() => setShowWriteReviewForm(false)}>
        Cancel
        </button>
    </div>
  </div>
)}
      {activeTab === "reviews" && (
        <div className="reviews-section">
          <div className="reviews-header">
            <div>
              <h2>My Reviews</h2>
              <p>View and manage your product reviews</p>
            </div>
            <button className="write-review" onClick={() => setShowWriteReviewForm(true)}>Write a Review</button>
          </div>

          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              {editReviewId === review.id ? (
                <div className="edit-review-form">
                 <label>Review Title:</label>
                  <input type="text" placeholder="Review Title" value={reviewForm.title}
                  onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}/>

                 <label>Review description:</label>
                  <textarea placeholder="Review description" value={reviewForm.content}
                    onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}/>

                  <div className="form-buttons">
                    <button className="edit-button" onClick={saveReview}>Save</button>
                    <button className="delete-button" onClick={() => setEditReviewId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="review-top">
                    <div>
                      <h4>{review.product} <span className="tag">Product</span></h4>
                      <p className="stars">{"⭐".repeat(review.stars)}</p>
                    </div>
                    <div className="review-actions">
                      <button className="edit-button" onClick={() => startEditReview(review)}>Edit</button>
                      <button className="delete" onClick={() => deleteReview(review.id)}>Delete</button>
                    </div>
                  </div>
                  <p className="review-title">{review.title}</p>
                  <p className="review-content">{review.content}</p>
                  <span className="review-date">Reviewed on {review.date}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AccountDetails;