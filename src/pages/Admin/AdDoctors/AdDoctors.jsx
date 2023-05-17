import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import AdDoctorTable from './AdDoctorTable';
import Swal from 'sweetalert2';

const AdDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4500/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [control]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4500/doctors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId > 0) {
                    setControl(!control);
                }
            })
            .catch(err => console.log(err))
        console.log(data)
        reset();
    };
    const handleDoctorDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4500/doctors/delete/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result?.deletedCount > 0) {
                            setControl(!control);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        console.log(result)
                    })

            }
        })
    }
    return (
        <div className='mt-20 col-span-10'>
            <div>
                <label htmlFor="my-modal-5" className="btn btn-outline btn-error">Add New Doctor</label>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Contact</th>
                            <th>Speciality</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors.map(doctor => <AdDoctorTable
                                key={doctor.docId}
                                doctor={doctor}
                                handleDoctorDelete={handleDoctorDelete}
                            ></AdDoctorTable>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Put this part before </body> tag //modal part */} 
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal modal-box mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center text-3xl font-semibold mb-5'>Add New Doctor Data</h2>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className='flex justify-evenly gap-3'>
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Name" {...register("name")} />
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Id" {...register("docId")} />
                    </div>
                    <div className='flex justify-evenly gap-3'>
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Email" {...register("email")} />
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Phone" {...register("phone")} />
                    </div>
                    <div className="flex justify-evenly gap-3">
                        <input className='border p-3 mb-3 rounded-lg' placeholder="PhotoUrl" {...register("photoUrl")} />
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Speciality" {...register("speciality")} />
                    </div>
                    <div className="flex justify-evenly gap-3">
                        <input className='border p-3 mb-3 rounded-lg' placeholder="Location" {...register("location")} />
                        <input className='border p-3 mb-3 rounded-lg' placeholder="LinkedIn" {...register("linkedIn")} />
                    </div>

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <div className="modal-action flex justify-evenly gap-3">
                        <input type="submit" className='btn btn-success text-white' value='Add Doctor'></input>
                        <label htmlFor="my-modal-5" className="btn btn-error">CLOSE</label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AdDoctors;