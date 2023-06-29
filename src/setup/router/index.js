import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Example from "../../pages/example";
import Test from "../../pages/test";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/example" element={<Example />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
