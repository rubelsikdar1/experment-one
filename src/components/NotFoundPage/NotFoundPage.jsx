import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Your is wrong way </h1>
            <Link to="/"> Home </Link>
        </div>
    );
};

export default NotFoundPage;