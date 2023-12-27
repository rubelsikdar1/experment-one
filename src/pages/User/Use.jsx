import { useLoaderData } from "react-router-dom";
import Users from './../../components/Users/Users';
import Style from "./User.module.css"


const Use = () => {
    const user = useLoaderData();
    console.log(user);
    return (
       <div className="container max-auto">
            <div className={Style.wrap}>
                {
                    user.map((user, i )=> <Users key={i.toString()} user={user}/>)
                }
            </div>
       </div>
    );
};

export default Use;