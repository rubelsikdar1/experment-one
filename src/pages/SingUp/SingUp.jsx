import Login from "../../components/Lognin/Login";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

const SingUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div>
            <Login/>
        </div>
    );
};

export default SingUp;