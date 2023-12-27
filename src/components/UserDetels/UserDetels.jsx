import { useLoaderData } from "react-router-dom";


const UserDetels = () => {
    const user = useLoaderData();
    console.log(user)
    return (
        
        <div>
            <h1>Id: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Phone number: {user.phone}</h1>
            <h1>website: {user.website}</h1>
            <h1>Adderss: {user.address.city}</h1>
            <h1>Street: {user.address.street}</h1>
        </div>
    );
};

export default UserDetels;