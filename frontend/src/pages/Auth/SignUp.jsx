
import React, { useState } from 'react'
import Input from "../../components/inputs/Input.jsx";
import { validateEmail } from "../../utils/helper.js";
import {useNavigate} from "react-router-dom";

const SignUp = ({ setCurrentPage }) => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        let profileImageUrl="";

        if (!fullName) {
            setError("Please enter your name")
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email")
            return;
        }

        if (!password) {
            setError("Please enter a password")
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return;
        }

        setError("")

        // SignUp API call
        try {
            // TODO: Implement API call
            console.log("Sign up:", { name, email, password })
        } catch (error) {
            setError("Something went wrong. Please try again.")
        }
    };

    return (
        <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center items-center bg-gray-950 rounded-xl">
            <h3 className="text-lg font-semibold text-white">Create Account</h3>
            <p className="text-sm text-white mt-[5px] mb-6">Join us and build your resume</p>

            <form onSubmit={handleSignUp}>

                <div className="">
                <Input
                    value={name}
                    onChange={({ target }) => setFullName(target.value)}
                    label="Full Name"
                    placeholder="John Doe"
                    type="text" />

                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    label="E-mail"
                    placeholder="name@provider.com"
                    type="email" />

                <Input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    label="Password"
                    placeholder="Create a password..."
                    type="password" />

                <Input
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                    label="Confirm Password"
                    placeholder="Confirm your password..."
                    type="password" />

                {error && <p className="text-red-600 text-sm pb-2.5">{error}</p>}

                <button type="submit" className="btn-primary mb-4">Sign Up</button>

                <p className="text-[13px] text-white">Already have an account?{" "}
                    <button
                        type="button"
                        className="font-medium text-blue-500 cursor-pointer"
                        onClick={() => setCurrentPage("login")}>
                        Login
                    </button>
                </p>
                </div>
            </form>
        </div>
    )
}
export default SignUp
