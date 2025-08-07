import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";

export default function Login() {

    const schema = z.object({
        email: z.string().nonempty("Email is Required").email("Invalid Email"),
        password: z.string().regex(/^[A-Z][a-zA-Z]{2,}@\d+$/, "Password must start with a capital letter, contain at least 3 letters, followed by @ and numbers").nonempty("Password is Required"),
    });

    let navigate = useNavigate();
    let {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        setError
    } = useForm({
        resolver: zodResolver(schema)
    });


    async function onSubmit(values) {
        console.log(values);

        try {
            let {data} = await axios.post('https://linked-posts.routemisr.com/users/signin', values);
            console.log(data);
            if (data.message === "success") {
                navigate("/");
            }
        } catch (error) {
            console.log(error.response.data.error);
            setError("root", {
                message: error.response.data.error
            });
        }
    }

    return (
        <>
            <div className="bg-white p-5 rounded-lg mx-auto mt-[10%] w-[50%]">
                <h3 className={`text-blue-800 text-2xl font-semibold`}>Login Now</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} type="text"
                           placeholder="Type your email.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    {errors.email && <p className="text-red-500 w-full mt-2">{errors.email.message}</p>}
                    <input {...register("password")} type="password"
                           placeholder="Type your password.."
                           className="input input-neutral w-full mt-5 rounded-lg focus:outline-none focus:border-2 focus:border-blue-800"/>
                    {errors.password && <p className="text-red-500 w-full mt-2">{errors.password.message}</p>}
                    {errors.root && <p className="text-red-500 w-full mt-2 capitalize">{errors.root.message}</p>}
                    <button type={"submit"} disabled={isSubmitting}
                            className={`px-3 py-2 rounded-xl bg-blue-800 text-white my-3 text-center btn hover:bg-blue-700`}>
                        {isSubmitting ? <span className="loading loading-dots loading-xl"></span> : "Login"}
                    </button>
                </form>
            </div>
        </>
    );
}
