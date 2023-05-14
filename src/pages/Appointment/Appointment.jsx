import React from 'react';
import ContactCard from '../../components/AppointmentCards/ContactCard';
import AppointForm from '../../components/AppointmentCards/AppointForm';
import SharedBanner from '../shared/SharedBanner/SharedBanner';

const Appointment = () => {
    return (
        <div className='container mx-auto'>
            <SharedBanner>Form</SharedBanner>
            <div className='grid md:grid-cols-2 gap-5 items-center'>

                <ContactCard></ContactCard>
                <AppointForm></AppointForm>
            </div>
        </div>
    );
};

export default Appointment;