import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError();
    console.error(error)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <h4 className='text-3xl'> Please <button onClick={handleLogout}>Sign out</button></h4>
        </div>
    );
};

export default DisplayError;