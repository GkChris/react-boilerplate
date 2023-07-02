import React from 'react';
import { Button_Bootstrap } from '../../../../common/components/Ui/Buttons';
import { login, logout, register, testAuth } from './utils';


const TestAuth = () => {
    
    return (
        <>
            <div>
                <Button_Bootstrap 
                    text={'Register'}
                    variant={'primary'}
                    onClick={register}
                />
                <Button_Bootstrap 
                    text={'Login'}
                    variant={'primary'}
                    onClick={login}
                />
                <Button_Bootstrap 
                    text={'Logout'}
                    variant={'primary'}
                    onClick={logout}
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