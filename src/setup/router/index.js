import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Test from "../../pages/test";
import TestAuth from "../../pages/testAuth";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/test" element={<Test />} />
                <Route path="/test-auth" element={<TestAuth />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
