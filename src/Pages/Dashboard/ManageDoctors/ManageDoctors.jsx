import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorozation: `bearer ${localStorage.getItem('accessToken')}`
                    },
                });
                const data = await res.json();
                return data
            } catch (error) {

            }

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage doctors:{doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialist</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            doctors?.map((doctor, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.image} alt='img' />
                                        </div>
                                    </div>

                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button className='btn bt-xm'>Delete</button></td>

                            </tr>)}


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;