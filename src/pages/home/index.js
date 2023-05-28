import React from 'react';
import { Button_Bootstrap } from '../../common/components/Ui/Buttons';
import useAxiosGet from '../../common/hooks/useAxiosGet';
import useLocalStorage from '../../common/hooks/useLocalStorage';
import useCounter from './hooks/useCounter';
import localStorageKeys from '../../config/localSotrageKeys';

const Home = () => {
    
    const { count, increment, decrement } = useCounter(0, 1);
    const { data, loading, error } = useAxiosGet('https://api.example.com/data');
    const [value, setValue] = useLocalStorage(localStorageKeys.lsKey_myValue, 'Default Value');

    return (
        <>
            <h1>Home</h1>
            <div>
                <h1>Counter: {count}</h1>
                <Button_Bootstrap 
                    text={'Increment'}
                    variant={'primary'}
                    onClick={increment}
                />
                <Button_Bootstrap 
                    text={'Decrement'}
                    variant={'primary'}
                    onClick={decrement}
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

export default Home