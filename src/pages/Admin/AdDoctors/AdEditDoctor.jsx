import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdEditDoctor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [doctor, setDoctor] = useState([]);
    const { docId, photoUrl, name, phone, email, speciality, location, linkedIn } = doctor;

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4500/doctors/${id}`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data)
            })
    }, [])
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:4500/doctors/update-doctor/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center text-3xl font-semibold mb-5'>Edit Doctor Data</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='flex justify-evenly gap-3'>
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={name} {...register("name")} />
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={docId} {...register("docId")} />
                </div>
                <div className='flex justify-evenly gap-3'>
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={email} {...register("email")} />
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={phone} {...register("phone")} />
                </div>
                <div className="flex justify-evenly gap-3">
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={photoUrl} {...register("photoUrl")} />
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={speciality} {...register("speciality")} />
                </div>
                <div className="flex justify-evenly gap-3">
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={location} {...register("location")} />
                    <input className='border p-3 mb-3 rounded-lg' defaultValue={linkedIn} {...register("linkedIn")} />
                </div>

                <div className="flex justify-evenly gap-3">
                    <input type="submit" className='btn btn-success text-white' value='Add Doctor'></input>
                </div>
            </form>
        </div>
    );
};

export default AdEditDoctor;