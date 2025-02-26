'use client';


import Lottie from 'lottie-react';
import errpage from '@/assets/errpage.json'; 

export default function ErrorPage() {
   

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <Lottie animationData={errpage} className="w-80 h-80" />
            <h1 className="text-2xl font-semibold text-red-600">Page In Not Available !</h1>
            <a href="/" className="mt-2 text-blue-600 hover:underline">
                Go back to home
            </a>
        </div>
    );
}
