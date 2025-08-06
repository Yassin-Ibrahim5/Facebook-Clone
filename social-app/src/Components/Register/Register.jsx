import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    let {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setError
    } = useForm();

    let navigate = useNavigate();

    async function onSubmit(values) {
        console.log(values);

        try {
            let {data} = await axios.post('https://linked-posts.routemisr.com/users/signup', values);
            console.log(data);
            if (data.message === "success") {
                navigate("/login");
            }
        } catch (error) {
            console.log(error.response.data.error);
            setError("root", {
                message: error.response.data.error
            });
        }
    }

    return (<>
        <div className="bg-white p-5 rounded-lg mx-auto mt-[10%] w-[50%]">
            <h3 className={`text-blue-800 text-2xl font-semibold`}>Register Now</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required: "Name is Required"})} type="text" placeholder="Type your name.."
                       className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                {errors.name && <p className="text-red-500 w-full mt-2">{errors.name.message}</p>}
                <input {...register("email", {required: "Email is Required"})} type="text"
                       placeholder="Type your email.."
                       className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                {errors.email && <p className="text-red-500 w-full mt-2">{errors.email.message}</p>}
                <input {...register("password", {required: "Password is Required"})} type="password"
                       placeholder="Type your password.."
                       className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                {errors.password && <p className="text-red-500 w-full mt-2">{errors.password.message}</p>}
                <input {...register("rePassword", {required: "Please Confirm Your Password"})} type="password"
                       placeholder="Confirm password.."
                       className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                {errors.rePassword && <p className="text-red-500 w-full mt-2">{errors.rePassword.message}</p>}
                <input {...register("dateOfBirth", {required: "Date of Birth is Required"})} type="date"
                       placeholder="Date of birth.."
                       className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                {errors.dateOfBirth && <p className="text-red-500 w-full mt-2">{errors.dateOfBirth.message}</p>}
                <div className="mt-2">
                    <input {...register("gender", {required: "Gender is Required"})} type="radio" id={"male"}
                           name="gender"
                           value={"male"}
                           className="radio radio-primary"/>
                    <label htmlFor={"male"} className={"px-2"}>Male</label>
                    <input {...register("gender", {required: "Gender is Required"})} type="radio" id={"female"}
                           name="gender"
                           value={"female"}
                           className="radio radio-primary"/>
                    <label htmlFor={"female"} className={"px-2"}>Female</label>
                </div>
                {errors.gender && <p className="text-red-500 w-full mt-2">{errors.gender.message}</p>}
                {errors.root && <p className="text-red-500 w-full mt-2 capitalize">{errors.root.message}</p>}
                <button type={"submit"} disabled={isSubmitting}
                        className={`px-3 py-2 rounded-xl bg-blue-800 text-white my-3 text-center btn hover:bg-blue-700`}>
                    {isSubmitting ? <span className="loading loading-dots loading-xl"></span> : "Register"}
                </button>
            </form>
        </div>
    </>);
}
