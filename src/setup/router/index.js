import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Guard } from "../authentication/guard";

import Test from "../../pages/test";

import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import Protected_Page from "../../pages/protectedPage";
import Landing from "../../pages/landing";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                { /* ROOT */ }
                <Route path="/" element={<Landing />} />

                { /* TEST */ }
                <Route path="/test" element={<Test />} />

                { /* Auth */ }
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                { /* Protected */ }
                <Route path="/protected" element={<Guard><Protected_Page /></Guard>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
