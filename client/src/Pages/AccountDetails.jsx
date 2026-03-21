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
                <div className="AccountDetailsPersonal">
                    <p>Personal Info</p>
                </div>
                <div className="AccountDetailsReviews">
                    <p>Personal Info</p>
                </div>
                <div className="AccountDetailsSettings">
                    <p>Personal Info</p>
                </div>
            </div>
        </>
    )
}

export default AccountDetails;