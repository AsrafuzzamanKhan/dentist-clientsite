import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken'

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpErr, setSignUpErr] = useState('')
    const [createdUserEmail, setCreatedUSerEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()


    if (token) {
        navigate('/')
    }
    const handleSignUp = data => {
        console.log(data)
        setSignUpErr('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User created Successfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserDB(data.name, data.email)
                    })
                    .catch(err => console.log(err))
            })
            .catch(errors => {
                console.log(errors.message)
                setSignUpErr(errors.message)
            })
    }

    const saveUserDB = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save user to DB', data)
                setCreatedUSerEmail(email)
            })
    }
    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/')
                }
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center my-2'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs"
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                            })}
                            placeholder="Name" />
                    </div>
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
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
                                pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password must be contain least one number & one special character' }
                            })}
                            placeholder="Password" />

                    </div>
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    {signUpErr && <p className='text-red-600'>{signUpErr}</p>
                    }
                    <input className='btn btn-accent w-full my-3' type="submit" value='Sign up' />
                </form>
                <p>Already have an Account ? <Link className='text-secondary' to='/login'> Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;