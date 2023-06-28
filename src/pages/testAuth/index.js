import React from 'react';
import { Button_Bootstrap } from '../../common/components/Ui/Buttons';
import axios from 'axios';
import Cookies from 'js-cookie';

const TestAuth = () => {

    const register = () => {
        axios.post('http://localhost:9000/auth/register', {
            "data": {
                "username": "myusername",
                "firstname": "myname",
                "lastname": "mysurname",
                "email": "myemail@gmail.com",
                "phone": "6910101010",
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

        axios.get('http://localhost:9000/auth/testAuth', {headers: {
            "authorization": cookieValue
        }}).catch(err=>console.error(err))
    }

    return (
        <>
            <h1>Test Auth</h1>
            <div>
                <Button_Bootstrap 
                    text={'Register'}
                    variant={'primary'}
                    onClick={register}
                />
                <Button_Bootstrap 
                    text={'Test Auth'}
                    variant={'primary'}
                    onClick={testAuth}
                />
            </div>
        </>
    )
}

export default TestAuth