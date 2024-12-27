"use client"
import Link from 'next/link';


const MyNavbar = () => {
    
  return (
    <nav className=' flex justify-center items-center gap-3'>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products/1">Products</Link>
    </nav>
  );
};

export default MyNavbar
