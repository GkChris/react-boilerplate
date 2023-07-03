import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Example from "../../pages/example";
import Test from "../../pages/test";

import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                { /* ROOT */ }
                <Route path="/" element={<Example />} />

                { /* TEST */ }
                <Route path="/example" element={<Example />} />
                <Route path="/test" element={<Test />} />

                { /* Auth */ }
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
