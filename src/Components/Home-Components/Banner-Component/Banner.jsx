import React from 'react';
import GridOverlay from './GridOverlay';
import CreditCard from '../../../assets/CreditCard.png'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';


const Banner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black/60 to-gray-900/50 backdrop-blur-3xl bg-cover bg-center bg-no-repeat text-white">
            <Marquee
                speed={50}
                gradient={false}
                className="bg-black text-white py-3 text-lg font-medium tracking-wide"
            >
                ⚡ Fast & Secure Transactions &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                💳 Pay Bills Instantly &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                📱 Manage All Your Finances In One App &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
                🔐 100% Safe & Trusted by Thousands
            </Marquee>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-11/12 mx-auto gap-5'>
                <div className="flex-1 space-y-8 mt-10 ml-3 shadow-lg mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2471b5] leading-tight w-full">
                        Welcome to the New Era of Banking — Your Money, Always in Your Mobile
                    </h2>
                    <p className=" md:text-lg font-light text-gray-400 leading-tight">
                        With <span className="font-semibold text-[#3D90D7]">PayEase</span>, experience the future of digital banking right at your fingertips. Instantly send and receive money, pay utility bills, manage your savings, and track your expenses — all securely from a single platform.
                    </p>
                    <p className="text-sm text-gray-400 mt-4">🔐 Trusted by 10,000+ users & 24/7 secure banking</p>



                </div>

                <div className='flex-1'>
                    <motion.img
                        src={CreditCard}
                        alt="CreditCard"
                        className="w-full"
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
            <GridOverlay />

        </div>
    );
};

export default Banner;
