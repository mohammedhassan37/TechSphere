import '../styles/AccountDetails.css'

function AccountDetails(){
    return(
        <>
            <div className="AccountDetailsIntro">
                <h1>Account Details</h1>
                <p>Mange your profile and preferences.</p>
            </div>
            <div className="AccountDetailsMain">
                <div className="AccountDetailsMainInfo">
                    <h3>Name</h3>
                    <p>Job title</p>
                    <p>📍X, Y 📅 Joined March 2024</p>
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
                <p>Email</p>
            </div>

            <div className="AccountDetailsPassword">
                <p>🔑</p>
                <p>title</p>
                <button>Change password</button>
            </div>

            <div className="AccountDetailsDeleteAccount">
                <p>Danger Zone</p>
                <p>Permanently delete your account.</p>
                <button>Change password</button>
            </div>
           
        </>
    )
}

export default AccountDetails;