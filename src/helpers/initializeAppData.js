import axios from 'axios';
import AppConfig from '../config/appConfigurations';
import BrowserDatabaseKeys from '../config/browserDatabaseKeys';
import Domains from '../config/domains';

const AuthURI = Domains.auth;

export const InitilizeSessionStorage = async () => {
    console.log(Domains.auth);
    console.log(Domains.backend);
    await fetch_authServer_related_ids();
}



const fetch_authServer_related_ids = async () => {
    try {

        const storedRealmId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.realmId);
        const storedClientId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.clientId);
        const storedUserRoleId = sessionStorage.getItem(BrowserDatabaseKeys.sessionStorage.user_roleId);

        if ( storedRealmId && storedClientId && storedUserRoleId ) return;

        const realmRequest = axios.get(`${AuthURI}/realms/fetch?filters={"name":"${AppConfig.realm}"}`);
        const clientRequest = axios.get(`${AuthURI}/clients/fetch?filters={"name":"${AppConfig.client}"}`);
        const roleRequest = axios.get(`${AuthURI}/roles/fetch?filters={"name":"${AppConfig.user_role_code}"}`);

        const responses = await Promise.all([realmRequest, clientRequest, roleRequest]);

        const realmResponse = responses[0]?.data?.data?.realms;
        const clientResponse = responses[1]?.data?.data?.clients;
        const roleResponse = responses[2]?.data?.data?.roles;

        const realmId = realmResponse && realmResponse.length > 0 ? realmResponse[0]?._id : null;
        const clientId = clientResponse && clientResponse.length > 0 ? clientResponse[0]?._id : null;
        const user_roleId = roleResponse && roleResponse.length > 0 ? roleResponse[0]?._id : null;

        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.realmId, realmId);
        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.clientId, clientId);
        sessionStorage.setItem(BrowserDatabaseKeys.sessionStorage.user_roleId, user_roleId);

        return;

    } catch ( error ) {
        return;
    }
}
