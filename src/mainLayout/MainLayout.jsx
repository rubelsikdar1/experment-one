import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from './../components/Footer/Footer';
import Loding from "../components/Loding/Loding";


const MainLayout = () => {
    const naviagtion = useNavigation();
    console.log(naviagtion)
    return (
        <div>
            <Header/>
                <div>
                    {naviagtion=== "loding" ? <Loding/> : <Outlet/>}
                </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;