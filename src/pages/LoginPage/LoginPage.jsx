import { useNavigate } from "react-router-dom";
import Style from "./LoginPage.module.css"

const LoginPage = () => {
    const navigate= useNavigate();
    const handelGoBack =()=>{
        navigate(-1);
    }
    const goToHome = ()=>{
        navigate("/about")
    }
    return (
        <div>
            <div className={Style.heading}> Login</div>
            <button onClick={handelGoBack}> Go Back </button>
            <button onClick={goToHome} > Go to Home </button>
        </div>
    );
};

export default LoginPage;