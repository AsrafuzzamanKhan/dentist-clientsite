import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null)
    }

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
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
    const handelDoctorDelete = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`doctor ${doctor.name} Deleted sucessfully`)
                }

            })
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
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn bt-sm">Delete</label>

                                </td>

                            </tr>)}


                    </tbody>


                </table>
            </div>

            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure, you want to delete?`}
                    message={`If you delete ${deletingDoctor.name} It cannot be undone`}
                    closeModal={closeModal}
                    successAction={handelDoctorDelete}
                    successButtonName='delete'
                    modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;