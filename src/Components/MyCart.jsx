import React, { useEffect, useState } from 'react'
import Pizza from "../assets/Pizza.png";
import Pastry from "../assets/assets/Pastry.jpeg";
import Chinese from "../assets/assets/Noodles.jpeg";
import Indian from "../assets/indian-food.png";
import Chicken from "../assets/assets/Chicken.jpeg";
import Burger from "../assets/combo-offer.png";
import Beverages from "../assets/assets/Bevarages.jpeg";
import Tabakh from "../assets/assets/Tabakh.webp";
import GF from "../assets/assets/Globalfusion.jpg";
import Arabian from "../assets/chickenTikka.png";
import Sweet from "../assets/assets/Sweet.webp";
import {ShoppingCart, Trash2 , MapPin,CreditCard, Wallet, Search, Home, ChevronRight,Truck, ShieldCheck,Leaf, Headphones} from "lucide-react";
import { FaMotorcycle,
  FaHeadset,
} from "react-icons/fa";

const MyCart = () => {
    const [payment,setpayment]=useState("")
    const [items,setitems]=useState({i1:1,i2:1,i3:1,i4:1})
    const [cost,setcost]=useState(9)
    let totalcost=(i)=>{
        
           if (i=="i1") {
            setcost((prev)=>(prev+ 2))
            
           }
            if (i=="i2") {
            setcost((prev)=>(prev+ 2))
           }
            if (i=="i3") {
            setcost((prev)=>(prev+ 2))
           }
            if (i=="i4") {
            setcost((prev)=>(prev+ 3))
           }
            
        
        
    }

     let remove=(i)=>{
        
           if (i=="i1") {
            setcost((prev)=>(prev- 2))
           }
            if (i=="i2") {
            setcost((prev)=>(prev- 2))
           }
            if (i=="i3") {
            setcost((prev)=>(prev- 2))
           }
            if (i=="i4") {
            setcost((prev)=>(prev- 3))
           }
            
        
        
    }
    
  return (
    <div>

<div className=' mx-30 mt-6 '> 
  <div className='flex gap-4'>
    <ShoppingCart size={53} className='text-red-500'/>  
    <div><div className='font-bold text-3xl'>Your Cart</div>
    <div className='text-gray-500 text-sm'>3 items in your cart</div></div>
  </div>
  <div className='flex gap-6 mt-6'>
    <div className='rounded-xl p-2 shadow-[0_0_15px_rgba(0,0,0,0.3)] '>
        {/* 1 */}
        <div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex gap-3 w-60'>
                <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c" className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-xl font-bold '>Sushi</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
     <button className='text-lg' onClick={()=>{setitems((prev)=>({...prev,i1:prev.i1-1})); remove("i1") }}>-</button>
    <div className='text-lg'>{items.i1}</div>
    <button className='text-lg'  onClick={()=>{setitems((prev)=>({...prev,i1:prev.i1+1})); totalcost("i1")}}>+</button>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
<Trash2 size={25}/>
 </div>
             </div>

    {/* 2 */}
<div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex gap-3 w-60'>
                <img src={Arabian} className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-xl font-bold '> Grill Chicken</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4  bg-gray-50'>
     <button className='text-lg' onClick={()=>{setitems((prev)=>({...prev,i2:prev.i2-1})); remove("i2") }}>-</button>
    <div className='text-lg'>{items.i2}</div>
    <button className='text-lg'  onClick={()=>{setitems((prev)=>({...prev,i2:prev.i2+1})) ; totalcost("i2")}}>+</button>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 <Trash2 size={25}/>
 </div>
             </div>
{/* 3 */}
<div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex gap-3 w-60'>
                <img src="https://crazyaboutpizza.in/pizza/White%20Sauce%20Pasta.jpg" className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-xl font-bold '>Pasta </div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
     <button className='text-lg' onClick={()=>{setitems((prev)=>({...prev,i3:prev.i3-1})) ; remove("i3")}}>-</button>
    <div className='text-lg'>{items.i3}</div>
    <button className='text-lg'  onClick={()=>{setitems((prev)=>({...prev,i3:prev.i3+1})); totalcost("i3")}}>+</button>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 <Trash2 size={25}/>
 </div>
             </div>

{/* 4 */}
<div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex w-60 gap-3'>
                <img src={Tabakh} className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-xl font-bold '>Salad</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$3.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
    <button className='text-lg' onClick={()=>{setitems((prev)=>({...prev,i4:prev.i4-1})); remove("i4") }}>-</button>
    <div className='text-lg'>{items.i4}</div>
    <button className='text-lg'  onClick={()=>{setitems((prev)=>({...prev,i4:prev.i4+1})); totalcost("i4") }}>+</button>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
<Trash2 size={25}/>
 </div>
             </div>

    </div>
    <div className='rounded-xl p-4 shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[25vw]'>
        <div className='text-xl font-bold '>Order Summary</div>
        <div className='py-4 border-b border-gray-300'>
            <div className='flex justify-between my-4 mt-2'>
            <div className='text-gray-500'>Subtotal</div>
            <div className='text-gray-500'>${cost}</div>
        </div>
         <div className='flex justify-between my-4'>
            <div className='text-gray-500'>Delivery Fee</div>
            <div className='text-gray-500'>$0.60</div>
        </div>
         <div className='flex justify-between my-4 mb-2'>
            <div className='text-gray-500'>Taxes & Charges </div>
            <div className='text-gray-500'>$1.00</div>
        </div>
        </div>
       <div className='flex justify-between mt-5'>
        <div className='font-bold text-xl'>Total</div>
        <div className='text-xl font-bold text-red-700'>${1.60 +cost}</div>
       </div>
       <button className='w-full bg-red-500 text-white py-1 mt-5 rounded-md flex justify-center'>Place Order <ChevronRight size={25}/></button>

    </div>
  </div>

  <div className='flex gap-6 mt-6'>
<div className='rounded-xl p-3 shadow-[0_0_15px_rgba(0,0,0,0.3)] '>
<div className=' pb-1 flex gap-3'>
    <div className='text-red-600'><MapPin size={23}/></div>
    <div className='font-bold text-lg'>Delivery Address</div>
</div>
<div className=' rounded-md flex'>
    <div className=' flex pt-3'><Home size={27} className='text-red-600'/></div>
<div>
    <div className='p-3 flex gap-3'>
    <div className='font-bold text-lg'>Home</div>
    <div className='bg-red-300 text-red-800 px-2 rounded-xl text-sm justify-center flex items-center'>Default</div>
</div>
<div className='px-3'>
    <div className='text-sm text-gray-500'>Idhag Hills Bhopal,Madhya Pradesh-462001</div>
<div className='text-sm text-gray-500'>Amees Khan : 7415793311</div>
</div>
</div>
</div>
</div>

<div className='rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] p-3 w-85'>
    <div className='pb-1 flex gap-3'>
        <div className='pt-0.5 text-red-600'>
            <CreditCard size={23}/>
        </div>
        <div className='font-bold text-lg'>Payment Method</div>
    </div>
    <div className='rounded-xl'>

        <div className=' border-b border-gray-300  flex justify-between'>
       <button className='flex' onClick={()=>{setpayment("cod")}}><div className={`p-2 font-bold ${payment=="cod"?"text-red-600":""}`}>O</div>
       <div className='p-2 '>
        <div className='font-bold text-sm'>Cash on Delivery</div>
       </div>
       </button>
       <div className=' pt-2 text-red-600'> <Wallet size={22}/></div>
        </div>

         <div className=' border-b border-gray-300  flex justify-between'>
       <button className='flex' onClick={()=>{setpayment("upi")}}><div className={`p-2 font-bold ${payment=="upi"?"text-red-600":""}`}>O</div>
       <div className='p-2 '>
        <div className='font-bold text-sm'>UPI</div>
       </div>
       </button>
       {/* <div className=' pt-2'> <CreditCard size={22}/></div> */}
        </div>

         <div className=' border-b border-gray-300  flex justify-between'>
       <button className='flex' onClick={()=>{setpayment("card")}}><div className={`p-2 font-bold ${payment=="card"?"text-red-600":""}`}>O</div>
       <div className='p-2 '>
        <div className='font-bold text-sm'>Credit / Debit Card</div>
       </div>
       </button>
       <div className='text-red-600 pt-2'> <CreditCard size={22}/></div>
        </div>

    </div>
    </div>

</div>
    </div>
<div className='mt-8 flex gap-30 bg-pink-50 px-30 pt-5 pb-6'>
    {/* 1 */}
    <div className='flex gap-3'>
     <div className='text-red-500 pt-1'><FaMotorcycle size={45}/></div>
     <div>
        <div className='text-xl font-bold'>Fast Delivery</div>
        <div className='text-gray-500'>On time, every time</div>
     </div>
    </div>

    {/* 2 */}

    <div className='flex gap-3'>
     <div className='text-red-500 pt-1'><ShieldCheck size={45}/></div>
     <div>
        <div className='text-xl font-bold'>Safe & Secure </div>
        <div className='text-gray-500'>100% secure payments</div>
     </div>
    </div>

    {/* 3 */}

    <div className='flex gap-3'>
     <div className='text-red-500 pt-1'><Leaf size={45}/></div>
     <div>
        <div className='text-xl font-bold'>Fresh & Hygenic </div>
        <div className='text-gray-500'>Quality food, always</div>
     </div>
    </div>

    {/* 4 */}
 
 <div className='flex gap-3'>
     <div className='text-red-500 pt-1'><FaHeadset size={45}/></div>
     <div>
        <div className='text-xl font-bold'>24/7 Support </div>
        <div className='text-gray-500'>We're here to help</div>
     </div>
    </div>

 </div>
    </div>
  )
}

export default MyCart