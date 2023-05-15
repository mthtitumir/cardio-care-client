import React from 'react';

const AppointForm = () => {
    const handleAppointForm = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstname.value;
        const lastName = form.lastname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const appointment = {
            patientName : firstName+' '+lastName,
            phone,
            email,
            message
        }
        fetch('http://localhost:4500/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        console.log(appointment);
    }
    return (
        <div className=" mb-8">
            <div className="mt-10">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAppointForm} className="card-body">
                        <a className="font-bold normal-case text-2xl"><span className='text-red-600'>Cardio</span><span className='text-cyan-600'>Care</span> Form</a>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">FirstName</span>
                            </label>
                            <input type="text" placeholder="FirstName" name='firstname' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LastName</span>
                            </label>
                            <input type="text" placeholder="LastName" name='lastname' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone" name='phone' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea type="text" placeholder="Your Message" name='message' className="input input-bordered" ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='px-3 py-2 bg-cyan-600 rounded-lg text-white font-semibold' value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointForm;