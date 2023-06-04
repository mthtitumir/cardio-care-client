import React from 'react';
import { Link } from 'react-router-dom';

const AdDoctorTable = ({ doctor, handleDoctorDelete, handleDoctorEdit }) => {
    const {_id, photoUrl, name, phone, email, speciality, location, linkedIn } = doctor;
    return (
        <tr className='border'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td className=''>
                <div className='text-red-500'>Email: {email}</div>
                <div className='text-sky-500'>Phone: {phone}</div>
                <div className='text-purple-900'>LinkedIn: {linkedIn}</div>
            </td>
            <td>{speciality}</td>
            <td>
                <Link to={`/admin-access/doctors/edit/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
            </td>
            <td>
                <button onClick={()=>handleDoctorDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default AdDoctorTable;