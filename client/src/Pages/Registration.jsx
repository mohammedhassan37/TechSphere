import { useState } from "react";

function Registration(){
    
    const [isLogin, setIsLogin] = useState(true);

    return(
        <>
            
            <input type="text" placeholder="Enter your email" />

        </>
    )
}

export default Registration;