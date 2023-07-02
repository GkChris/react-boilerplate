import React from 'react';
import BrowserDatabaseKeys from '../../../../../config/browserDatabaseKeys';
import useCookies from '../../../../../common/hooks/useCookies';

const TestCookies = () => {
    
  const [cookieValue, setCookieValue] = useCookies(BrowserDatabaseKeys.cookies.myKey, 'initialValue');

  return (
    <>
        <div>
            <input
                type="text"
                value={cookieValue}
                onChange={(e) => setCookieValue(e.target.value)}
            />
        </div>
    </>
  );
};

export default TestCookies;
