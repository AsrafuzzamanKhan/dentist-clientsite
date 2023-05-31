import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoginError(err.message)
                console.log(err.message)
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center my-2'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                            })}
                            placeholder="Email" />
                    </div>
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
                                },
                            })}
                            placeholder="Password" />
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    {loginError && <p className='text-red-600'>{loginError}</p>}

                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                </form>
                <p>New to Dentist site? <Link className='text-secondary' to='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;