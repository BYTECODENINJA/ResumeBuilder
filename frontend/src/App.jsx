import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster} from "react-hot-toast";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Dashboard from "./pages/Home/Dashboard.jsx";
import EditResume from "./pages/ResumeUpdate/EditResume.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {/*---Default Route---*/}
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/SignUp" element={<SignUp/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/resume/:resumeId" element={<EditResume/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App
