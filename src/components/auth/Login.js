import React from 'react';

export const Login = () =>
{
    return(
        <div>
            <h2>Login Form</h2>
            <p>Sign into your account</p>

            <form className='form' >
                <div>
                    <input type='email' placeholder='Enter email address' name='email' />
                    <br/>
                    <input type='password' placeholder='*******' name='password' />
                </div>
            </form>
        </div>
    );
};

export default Login;