'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SignupPage = () => {
    return (
        <div className='lg:mx-12 px-2 lg:px-60 py-24'>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
                <Image src='/assets/images/login/login.svg' width={440} height={440} alt='login img' />
            </div>
            <div className='p-2 lg:p-12 border-2 rounded-md'>
            <h3 className='text-primary text-3xl font-semibold mb-2'>SignUp</h3>
                <form action="">
                    <div className='input-div my-2'>
                        <label htmlFor="name">name</label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div className='input-div my-2'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                    <div className='input-div my-2'>
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' placeholder="Your Password" className="input input-bordered w-full" />
                    </div>
                    <button className='btn btn-primary w-full my-2'>SignUp</button>
                </form>
                <div className='text-center my-6'>
                    <h5 className='text-primary font-semibold my-4'>Or signin with</h5>
                    <div className='flex space-x-3 justify-center items-center'>
                        <button className='btn rounded-full'><FaFacebookF className='text-blue-500' /></button>
                        <button className='btn rounded-full'><FaGoogle className='text-primary' /></button>
                        <button className='btn rounded-full'><FaGithub className='text-slate-800' /></button>
                    </div>
                </div>
                <h5 className='text-center myt-4'>Have you already an account?please <Link className='font-semibold text-primary' href='/signup'>LogIn</Link></h5>
            </div>
        </div>
    </div>
    );
};

export default SignupPage;