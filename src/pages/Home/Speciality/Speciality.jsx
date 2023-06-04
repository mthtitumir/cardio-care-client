import React, { useEffect, useState } from 'react';
import ProblemCard from '../../../components/ProblemCard/ProblemCard';
import TitleButton from '../../../components/TitleButton';

const Speciality = () => {
    const [problems, setProblems] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:4500/problems')
        .then(res => res.json())
        .then(data => setProblems(data))
    }, [])
    return (
        <div className='container mx-auto '>
            <div className='flex justify-center mb-3 mt-20'><TitleButton text={"Speciality"}></TitleButton></div>
            <h2 className='text-5xl text-sky-900 font-semibold text-center mb-10'>Cardio Problems</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {
                problems.map(problem => <ProblemCard problem = {problem} key={problem.id}></ProblemCard>)
               }

            </div>
        </div>
    );
};

export default Speciality;