import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Sucsessful')
                    refetch()
                }
            })
    }
    return (
        <div>
            <h2>All users</h2>
            <div class="overflow-x-auto ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr

                            key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}
                            </td>
                            <td> <button className='btn btn-xs btn-secondary'>Delete</button></td>

                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;