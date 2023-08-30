import axios from 'axios';
import AppConfig from '../config/appConfigurations';
import BrowserDatabaseKeys from '../config/browserDatabaseKeys';
import Domains from '../config/domains';

const AuthURI = Domains.auth;

export const InitilizeSessionStorage = async () => {
    await fetch_authServer_related_ids();
}



const fetch_authServer_related_ids = async () => {
    try {

        const storedRealmId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.realmId);
        const storedClientId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.clientId);
        const storedUserRoleId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.user_roleId);

        if ( storedRealmId && storedClientId && storedUserRoleId ) return;

        const response = await axios.get(`${AuthURI}/api/fetch/required/ids?realmName=${AppConfig.realm}&clientName=${AppConfig.client}&roleName=${AppConfig.user_role_code}`);

        const {realmId, clientId, roleId} = response.data?.data;

        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.realmId, realmId);
        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.clientId, clientId);
        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.user_roleId, roleId);

        return;

    } catch ( error ) {
        return;
    }
}
