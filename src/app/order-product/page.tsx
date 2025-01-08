"use client"
import { useRouter } from "next/navigation"


const OrderProductPage = () => {
    const router = useRouter();
   const HandleClick =()=> {
    router.push("/"); 
   };
  return (
    <>
     <div>
    <h1>Order-Products</h1>
    <button onClick={HandleClick}>Place-Order</button> 
     </div>
    </>
   
  )
}

export default OrderProductPage