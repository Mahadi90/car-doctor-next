'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {signIn} from 'next-auth/react'
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter()
    const handleLogin = async(event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const res = await signIn("credentials", {
            email,
            password,
            redirect : false
        })
        if(res.status === 200){
            router.push('/')
        }
    }
    return (
        <div className='lg:mx-12 px-2 lg:px-60 py-24'>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                    <Image style={{width : 'auto', height : 'auto'}} priority={true} src='/assets/images/login/login.svg' width={440} height={440} alt='login img' />
                </div>
                <div className='p-2 lg:p-12 border-2 rounded-md'>
                <h3 className='text-primary text-3xl font-semibold mb-2'>Login</h3>
                    <form onSubmit={handleLogin} action="">
                        <div className='input-div my-2'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                        </div>
                        <div className='input-div my-2'>
                            <label htmlFor="password">Password</label>
                            <input type="text" name='password' placeholder="Your Password" className="input input-bordered w-full" />
                        </div>
                        <button className='btn btn-primary w-full my-2'>Login</button>
                    </form>
                    <div className='text-center my-6'>
                        <h5 className='text-primary font-semibold my-4'>Or signin with</h5>
                        <div className='flex space-x-3 justify-center items-center'>
                            <button className='btn rounded-full'><FaFacebookF className='text-blue-500' /></button>
                            <button className='btn rounded-full'><FaGoogle className='text-primary' /></button>
                            <button className='btn rounded-full'><FaGithub className='text-slate-800' /></button>
                        </div>
                    </div>
                    <h5 className='text-center myt-4'>Are you new in this website?please <Link className='font-semibold text-primary' href='/signup'>SignUp</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;