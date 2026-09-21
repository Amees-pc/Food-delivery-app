import React from 'react'
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
const MyCart = () => {
  return (
    <div className=' mx-30 mt-6 '> 
  <div >  
    <div className='font-bold text-3xl'>Your Cart</div>
    <div className='text-gray-500 text-sm'>3 items in your cart</div>
  </div>
  <div className='flex gap-2 mt-4'>
    <div className='rounded-xl shadow-xl '>
        {/* 1 */}
        <div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex gap-3 w-60'>
                <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c" className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-lg font-bold '>Sushi</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
    <div className='text-lg'>-</div>
    <div className='text-lg'>1</div>
    <div className='text-lg'>+</div>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 X
 </div>
             </div>

    {/* 2 */}
<div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex gap-3 w-60'>
                <img src={Arabian} className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-lg font-bold '> Grill Chicken</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
    <div className='text-lg'>-</div>
    <div className='text-lg'>1</div>
    <div className='text-lg'>+</div>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 X
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
    <div className='text-lg'>-</div>
    <div className='text-lg'>1</div>
    <div className='text-lg'>+</div>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 X
 </div>
             </div>

{/* 4 */}
<div className='p-2 border-b border-gray-200 flex justify-between w-2xl'>

            <div className='flex w-60 gap-3'>
                <img src={Tabakh} className='rounded-xl h-20 w-25 object-fit' alt="" />
                <div>
                <div className=' text-xl font-bold '>Salad</div>
                <div className='text-sm text-gray-500'>Global Fussion</div>
                <div className='text-red-400'>$2.00</div>
                </div>
            </div>
 
 <div className='flex justify-center items-center'>
    <div className='flex justify-between rounded-md w-30  px-2 py-1 gap-4 bg-gray-50'>
    <div className='text-lg'>-</div>
    <div className='text-lg'>1</div>
    <div className='text-lg'>+</div>
 </div>
 </div>

 <div className='flex justify-center items-center text-red-600 pr-6'>
    
 X
 </div>
             </div>

    </div>
    <div className='rounded-xl'>order summary</div>
  </div>

  <div className='flex gap-2 mt-2'>
<div className='rounded-xl p-3 shadow-xl '>
<div className='font-bold text-lg pb-1'>Delivery  Address</div>
<div className='bg-gray-50 rounded-md'>
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
    </div>
  )
}

export default MyCart