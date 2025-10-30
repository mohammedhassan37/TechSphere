import '../Styles/Registeration.css'

function Registeration(){
return(
    <>
        <div className="RegisterationFormContainer">
            <div className="RegisterationForm">
                <div className="RegisterationBtns">
                    <button>Login</button>
                    <button>Signup</button>
                </div>
                <form action="">
                    <label htmlFor="">Enter your Email</label>
                    <input type="text" />
                    <label htmlFor="">Enter Your Password</label>
                    <input type="password" />
                    <label htmlFor="">Verify Your Password</label>
                    <input type="Password" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    </>
)
}

export default Registeration;