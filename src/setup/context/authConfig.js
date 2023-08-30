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
  const [authConfigValues, setAuthConfigValues] = useState({});

  const fetchAuthServerRelatedIds = async () => {
    try {
      const response = await axios.get(
        `${AuthURI}/api/fetch/required/ids?realmName=${AppConfig.realm}&clientName=${AppConfig.client}&roleName=${AppConfig.user_role_code}`
      );

      const { realmId, clientId, roleId } = response.data?.data;

      setAuthConfigValues({ realmId, clientId, user_roleId: roleId });
    } catch (error) {
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchAuthServerRelatedIds();
  }, []);

  return (
    <AuthConfigContext.Provider value={authConfigValues}>
      {children}
    </AuthConfigContext.Provider>
  );
};
