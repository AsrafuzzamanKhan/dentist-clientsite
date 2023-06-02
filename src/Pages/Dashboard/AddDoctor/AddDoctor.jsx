import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = import.meta.env.VITE_IMGBB_KEY
    const navigate = useNavigate()
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data;

        }
    })
    const handleAddDoctor = data => {

        const image = data.image[0]
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        console.log('url', url)
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    // save doctor information to database 
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is Added successfully`)
                            navigate('/dashboard/managedoctors')
                        })

                }
            }
            )
    }
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div className='w-96 p-7'>
            <h2 className='text=xl'>Add a Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                        <span className="label-text">Speciality</span>
                    </label>
                    <select className="select input-bordered w-full max-w-xs"

                        {...register("specialty", {
                            required: true,
                        })}
                    >

                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs"
                        type="file"
                        {...register("image", {
                            required: "Photo is required",
                        })}
                        placeholder="image" />
                </div>
                {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                <input className='btn btn-accent w-full my-3' type="submit" value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;