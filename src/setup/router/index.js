import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Guard } from "../authentication/guard";

import Test from "../../pages/test";

import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import Protected_Page from "../../pages/protectedPage";
import Landing from "../../pages/landing";
import styled from "styled-components";
import Navbar from "../../common/components/Navbar";


const Page = styled.div``;

const AppRouter = () => {

    
    return (
        <Page>
            <Guard allowGuests={true}><Navbar /></Guard>
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
        </Page>
    );
};

export default AppRouter;
