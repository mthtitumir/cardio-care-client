import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4500/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className='container mx-auto '>
            <div className='flex justify-center mb-3 mt-20'><button className='py-2 px-3 text-cyan-500 font-semibold text-md shadow-lg rounded-lg uppercase drop-shadow-lg'>Doctors</button></div>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Our Heros</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {
                doctors.slice(0,4).map(doctor => <SingleDoctor
                    key={doctor._id}
                    doctor={doctor}
                    ></SingleDoctor>
                    )
               }

            </div>
        </div>
    );
};

export default Doctors;