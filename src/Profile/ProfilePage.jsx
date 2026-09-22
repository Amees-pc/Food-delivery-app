import React from 'react'
import Profileimg from "../assets/ProfileBanner.png";
import burgerComboImg from "../assets/burger-combo.png";
import {ShoppingCart, Trash2 , MapPin,CreditCard, Wallet, Search, Home, ChevronRight,Truck, ShieldCheck,Leaf, Headphones} from "lucide-react";

const ProfilePage = () => {
  return (
//     <div className=' rounded-md h-50 bg-center bg-no-repeat my-2 relative p-4 mx-4' style={{backgroundImage: `URL(${Profileimg})`,
// backgroundSize: "105% 165%"}}>ProfilePage</div>
<div className='min-h-screen px-15'>
    <div className='bg-cover bg-center bg-no-repeat p-8'
    style={{backgroundImage: `url(${Profileimg})`}}>
       <div className='flex gap-8'>
       <img src={burgerComboImg} className='rounded-full h-35 w-35' alt="" />
       <div className='pt-6'>
        <div className='font-bold text-4xl mb-1'>Danniel Rosh</div>
        <div className='text-sm text-gray-500'>fazink3@gmail.com</div>
        <div className='text-sm text-gray-500'>Bhopal, Madhya Pradesh</div>
       </div>
       </div>
    </div>

    <div className='flex mt-8 gap-10'>
     <div className='rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.3)] p-4  w-[40vw] '>
      <div className='font-bold text-xl mb-3'>Personal Information</div>
      <div className=''>

      <div className='border-b border-gray-300'>
        <div className='flex p-2 justify-between  w-[20vw]'>
       <div className='text-sm text-gray-500'>Full name</div>
       <div className='text-sm font-bold'>Daniel Rosh</div>
      </div>
      </div>
      {/* 2 */}
        <div className='border-b border-gray-300 '>
          <div className='flex p-2 justify-between  w-[20vw]'>
       <div className='text-sm text-gray-500'>Email</div>
       <div className='text-sm font-bold '>Ask23@gmail.com</div>
      </div>
        </div>
      {/* 3 */}
        <div className='border-b border-gray-300'>
        <div className='flex p-2 justify-between  w-[20vw]'>
       <div className='text-sm text-gray-500'>Phone</div>
       <div className='text-sm font-bold '>7415792211</div>
      </div>
        </div>
      {/* 4 */}
        <div className='border-gray-300 border-b'>
          <div className='flex p-2 justify-between  w-[20vw]'>
       <div className='text-sm text-gray-500'>Date of birth</div>
       <div className='text-sm font-bold '>14 march 2005</div>
      </div>
        </div>
      {/* 5 */}
        <div className=''>
          <div className='flex p-2 justify-between  w-[20vw]'>
       <div className='text-sm text-gray-500'>Gender</div>
       <div className='text-sm font-bold'>Male</div>
      </div>
        </div>

      </div>
     </div> 
     <div className='rounded-xl shadow-[0_0_6px_rgba(0,0,0,0.3)] p-4  w-[40vw]'>

     <div className='flex justify-between'>
      <div className='flex gap-3 mb-3'>
      <div className='text-red-500'><MapPin/></div>
      <div className='font-bold text-xl'>Address</div>
     </div>
      <div className='text-sm text-red-600 bg-red-50 h-fit py-1 px-3 rounded-md '>+ Add Address</div>
     </div>

      {/* <div className='p-3 flex gap-6'>
      <div className='text-red-500'><Home size={25}/></div>
      <div>
        <div className='flex gap-3'></div>
      </div>
      </div> */}
   {/* 1 */}
      <div className=' gap-5 flex p-3 justify-between bg-red-50 rounded-md'>
          <div className='flex gap-5'>
<div className=' flex pt-3'><Home size={27} className='text-red-600'/></div>
      <div>
          <div className='px-3 py-2 flex gap-3'>
          <div className='font-bold text-lg'>Home</div>
          <div className='bg-red-300 text-red-600 px-2 rounded-xl text-sm justify-center flex items-center'>Default</div>
      </div>
      <div className='px-3'>
          <div className='text-sm text-gray-500'>Idhag Hills Bhopal,Madhya Pradesh-462001</div>
      <div className='text-sm text-gray-500'>Amees Khan : 7415793311</div>
      </div>
      </div>
          </div>
          <div className='flex gap-3  items-center'>
          <div><Trash2 size={23}/></div>
          </div>
      </div>
{/* 2 */}
<div className=' gap-5 flex p-3 justify-between rounded-md'>
          <div className='flex gap-5 '>
            <div className=' flex pt-3'><MapPin size={27} className=''/></div>
      <div>
          <div className='px-3 py-2 flex gap-3'>
          <div className='font-bold text-lg'>Other</div>
          {/* <div className='bg-red-300 text-red-600 px-2 rounded-xl text-sm justify-center flex items-center'>Default</div> */}
      </div>
      <div className='px-3'>
          <div className='text-sm text-gray-500'>Kohefiza Bhopal,Madhya Pradesh-462001</div>
      <div className='text-sm text-gray-500'>Amees Khan : 7415793311</div>
      </div>
      </div>
          </div>
          <div className='flex gap-3  items-center'>
          <div><Trash2 size={23}/></div>
          </div>
      </div>
      
     </div>
     
    </div>
ghgf
</div>
  )
}

export default ProfilePage