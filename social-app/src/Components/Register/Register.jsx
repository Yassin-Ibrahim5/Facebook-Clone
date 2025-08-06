import React from 'react';

export default function Register() {
    return (
        <div className={`flex justify-center items-center`}>
            <div className="bg-white p-5 rounded-lg mx-auto mt-[10%]">
                <h3 className={`text-blue-800 text-2xl font-semibold`}>Register Now</h3>
                <form>
                    <input type="text" placeholder="Type your name.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    <input type="text" placeholder="Type your email.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    <input type="password" placeholder="Type your password.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    <input type="password" placeholder="Confirm password.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    <input type="date" placeholder="Date of birth.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    <div className="mt-2">
                        <input type="radio" id={"male"} name="gender" className="radio radio-primary"/>
                        <label htmlFor={"male"} className={"px-2"}>Male</label>
                        <input type="radio" id={"female"} name="gender" className="radio radio-primary"/>
                        <label htmlFor={"female"} className={"px-2"}>Female</label>
                    </div>
                    <button className={`px-3 py-2 rounded-xl bg-blue-800 text-white my-3 text-center btn hover:bg-blue-700`}>Register</button>
                </form>
            </div>
        </div>
    );
}
