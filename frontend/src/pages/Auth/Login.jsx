import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Input from "../../components/inputs/Input.jsx";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    // Handle Login form submit
    const handleLogin = async (e) => {
        e.preventDefault();

        if ( !validateEmail(email) ) {
            setError("Please enter a valid email")
            return;
        }

        setError("")

        //Login API call
    };


    return <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold text-white">Welcome Back!</h3>
        <p className="text-sm text-white mt-[5px] mb-6">Please enter your details</p>

        <form onSubmit={handleLogin}>

            <Input
                value={email}
                onChange={({target}) => setEmail(target.value)}
                label="E-mail"
                placeholder="name@provider.com"
                type="email"/>

            <Input
                value={password}
                onChange={({target}) => setPassword(target.value)}
                label="Password"
                placeholder="Enter your password..."
                type="password"/>

            {error && <p className="text-red-600 text-sm pb-2.5">{error}</p>}

            <button type="submit" className="btn-primary">Login</button>

            <p className="text-[13px] text-white">Don't have an account?{" "}
            <button className="font-medium text-blue-500 cursor-pointer"
            onClick={() => {
                setCurrentPage("signup");
            }}>SignUp</button>
            </p>
        </form>
    </div>
}
export default Login
