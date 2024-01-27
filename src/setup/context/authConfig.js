// AuthConfigContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppConfig from '../../config/appConfigurations';
import Domains from '../../config/domains';

const AuthURI = Domains.auth;

const AuthConfigContext = createContext();

export const useAuthConfig = () => {
  return useContext(AuthConfigContext);
};

export const AuthConfigProvider = ({ children }) => {

  const realmId_saved = sessionStorage.getItem("realmId");
  const clientId_saved = sessionStorage.getItem("clientId")
  const user_roleId_saved = sessionStorage.getItem("user_roleId")

  const [authConfigValues, setAuthConfigValues] = useState({ realmId: realmId_saved, clientId: clientId_saved, user_roleId: user_roleId_saved });

  const fetchAuthServerRelatedIds = async () => {
    try {
      const response = await axios.get(
        `${AuthURI}/api/fetch/required/ids?realmName=${AppConfig.realm}&clientName=${AppConfig.client}&roleName=${AppConfig.user_role_code}`
      );

      const { realmId, clientId, roleId } = response.data?.data;
      sessionStorage.setItem("realmId", realmId);
      sessionStorage.setItem("clientId", clientId);
      sessionStorage.setItem("user_roleId", roleId);

      setAuthConfigValues({ realmId, clientId, user_roleId: roleId });
    } catch (error) {
      // Handle error if needed
    }
  };

  
  useEffect(() => {;
    if ( !realmId_saved || !clientId_saved || !user_roleId_saved ) {
      fetchAuthServerRelatedIds();
    }
  }, []);

  if ( !authConfigValues ) return <></>

  return (
    <AuthConfigContext.Provider value={authConfigValues}>
      {children}
    </AuthConfigContext.Provider>
  );
};
