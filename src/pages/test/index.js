import React from 'react';
import { Button_Bootstrap } from '../../common/components/Ui/Buttons';
import useAxiosGet from '../../common/hooks/useAxiosGet';
import useLocalStorage from '../../common/hooks/useLocalStorage';
import useCounter from './hooks/useCounter';
import localStorageKeys from '../../config/localSotrageKeys';
import axios from 'axios';
import Cookies from 'js-cookie';

const Test = () => {
    
    const { count, increment, decrement } = useCounter(0, 1);
    const { data, loading, error } = useAxiosGet('https://api.example.com/data');
    const [value, setValue] = useLocalStorage(localStorageKeys.lsKey_myValue, 'Default Value');
    

    const register = () => {
        axios.post('http://localhost:9000/auth/register', {
            "data": {
                "username": "GkChris555",
                "firstname": "Christos",
                "lastname": "Gkagkas",
                "email": "gkagkaschrist555os@gmail.com",
                "phone": "6940711555723",
                "phone_code": "+30",
                "roleId": "649a9102cac7f1d201aa785a",
                "realmId": "649a9102cac7f1d201aa7853",
                "clientId": "649a9102cac7f1d201aa7855",
                "password": "Test12345"
            }
        },{ withCredentials: true }).catch(err=>console.error(err))
    }


    const testAuth = () => {
        const cookieValue = Cookies.get('authorization');        
        console.log('TOKEN', cookieValue);
        axios.get('http://localhost:9000/auth/testAuth', {headers: {
            "authorization": cookieValue
        }}).catch(err=>console.error(err))
    }

    return (
        <>
            <h1>Test</h1>
            <div>
                <h1>Counter: {count}</h1>
                <Button_Bootstrap 
                    text={'Increment'}
                    variant={'primary'}
                    onClick={register}
                />
                <Button_Bootstrap 
                    text={'Decrement'}
                    variant={'primary'}
                    onClick={testAuth}
                />
                

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div>
                    <h2>Fetched Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}

                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <p>Stored value: {value}</p>
            </div>
        </>
    )
}

export default Test