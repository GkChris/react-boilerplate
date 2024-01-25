import React from 'react';
import Cookies from 'js-cookie';
import browserDatabaseKeys from '../../../config/browserDatabaseKeys'
import { useAuthApi } from '../../../setup/authentication/requests';
import './style.css';

const authenticationCookieChecker = browserDatabaseKeys?.cookies?.authorization;
const authenticatedUserToken = browserDatabaseKeys?.sessionStorage?.user;


const Navbar = () => {

    const authApiCalls = useAuthApi();
    const isLogged = Cookies.get(authenticationCookieChecker);

    if ( !isLogged ) sessionStorage.setItem(authenticatedUserToken, null);


    const brand_click_action = () => {
		window.location.assign('/')
    }

    const logout_user = () => {
        authApiCalls.logout()
            .then((res) => window.location.assign('/'))
            .catch((err) => console.error(err));
    }

    const login_user = () => {
        window.location.assign('/login')
    }

    const register_user = () => {
        window.location.assign('/register')
    }

  return (
    <nav>
		<div className="brand" onClick={() => brand_click_action()}>React boilerplate</div>
		<div className="nav-buttons">
			{isLogged ? (
				<button onClick={() => logout_user()}>Logout</button>
			) : (
				<>
					<button onClick={() => login_user()}>Login</button>
					<button onClick={() => register_user()}>Register</button>
				</>
			)}
		</div>
    </nav>
  );
};

export default Navbar;
