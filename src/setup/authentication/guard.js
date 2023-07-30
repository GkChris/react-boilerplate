import React, { useEffect, useState } from "react";
import { verify } from "./requests";

export const Guard = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isUnauthorized, setIsUnauthorized] = useState(false);

    useEffect(() => {
        const runVerify = async () => {
            try {
                const response = await verify();
                if (response?.data?.error) {
                    setIsUnauthorized(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        runVerify();
    }, []);

    useEffect(() => {
        if ( isUnauthorized ) window.location.assign('/register');
    },[isUnauthorized])

    if (loading) return <></>

    if (error) {
        // Render an error state if the API call resulted in an error
        return <p>Error occurred. Please try again later.</p>;
    }

    // Render the child component (Page) when the API call is successful and no error is found
    if ( !loading && !isUnauthorized ) return <>{children}</>;
};

