import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Speciality from '../Speciality/Speciality';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <Speciality></Speciality>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;