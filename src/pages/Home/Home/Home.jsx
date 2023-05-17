import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Speciality from '../Speciality/Speciality';
import AboutUs from '../AboutUs/AboutUs';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Speciality></Speciality>
            <AboutUs></AboutUs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;