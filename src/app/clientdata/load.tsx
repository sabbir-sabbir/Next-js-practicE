'use client'
import Lottie from 'lottie-react';
import loader from '@/assets/load.json'
export default function LoadingAnim() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
        <Lottie animationData={loader} className="w-80 h-80" />

    </div>
    );
}