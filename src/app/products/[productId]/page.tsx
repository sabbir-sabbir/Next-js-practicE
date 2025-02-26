'use client'
import { useRouter } from "next/navigation";
import {use} from 'react'

type Props = {params:Promise<{productId: string}>}




export default function ProductDetails({ params }: Props) {
    
  const productId =   use(params).productId
  const router = useRouter();

  const directHome =()=> {
    router.push('/')  
  }


    return (
        <div>
            <p>Here All Details {productId}</p>
            <button onClick={directHome}>Home</button>
        </div>
    );
}
