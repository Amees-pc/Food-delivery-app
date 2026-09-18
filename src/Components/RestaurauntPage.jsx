import React, { useState } from 'react'

import { User,PhoneCall  } from 'lucide-react';
export const RestaurauntPage = () => {
  const [role,setrole]=useState("seler")
    const [tab,settab]=useState("overview")
  return (
    <div className='mr-10 ml-10 mt-2 '>

<div>
        <div className='sticky top-0 flex justify-between rounded-md shadow-xl p-8 m-1 z-2 bg-white'>
             <div style={{width:"70%"}}>
                <div className='font-bold text-5xl pb-5'>Noor-us-sabah</div>
               
               <p className='text-gray-600 text-xl'>Zone 1, Opposite RBI, Near Parmali Wallace Complex, Narmadapuram Road, Maharana Pratap Nagar, Bhopa</p>
                 <div className='flex mt-5'>
                <div className='rounded-4xl border p-2 whitespace-nowrap flex px-4 border-gray-300'><div className='text-green-400 border-gray-300 border-r pr-2 mr-2'>Open</div><div>9am-12am</div></div>
                <div className=' border-r border-l mr-3 ml-4 pr-2 pl-2 flex items-center whitespace-nowrap border-gray-300'>$100, for two</div>
                <div className='flex'><div className='underline flex items-center border-gray-300'>7415793311</div></div>
             </div>
             </div>
             <div className='flex justify-between ml-10 items-center  '>
            <div className='flex mr-9 '>
                <div className="h-10 bg-green-900 w-20 rounded-xl flex items-center justify-center mr-2 text-2xl text-white" > ★ 4.5</div>
                <div><div className='text-xl font-bold'>275</div><div className='text-xs underline whitespace-nowrap '>Dinning Ratings</div></div>
            </div>
             <div className='flex '>
                <div className="h-10 bg-green-900 w-20 rounded-xl flex items-center justify-center mr-2 text-2xl text-white " > ★ 4.2</div>
                <div><div className='text-xl font-bold'>178</div><div className='whitespace-nowrap text-xs underline'>Delivery Ratings</div></div>
            </div>
             </div>
            </div>   
       
       <div className='grid grid-cols-6'>
       <img className='p-1 h-full col-span-2 rounded-xl ' src="https://images.squarespace-cdn.com/content/v1/587288fb197aea5ae694ef6b/19e05115-755e-44dc-b40e-59c24b722bf4/Copy%2Bof%2BF68A9232.jpg?format=2500w" alt="" />
    
       <img className='p-1 h-full rounded-xl col-span-2' src="https://digital.ihg.com/is/image/ihg/holiday-inn-glasgow-6003118133-original" alt="" />
       <img className='p-1 h-full rounded-xl col-span-2' src="https://images.squarespace-cdn.com/content/v1/587288fb197aea5ae694ef6b/19e05115-755e-44dc-b40e-59c24b722bf4/Copy%2Bof%2BF68A9232.jpg?format=2500w" alt="" />
       </div>
<div className=' border-b-2 gap-14 border-gray-200 mt-6 pb-6 pl-4  flex'>
<button className={`text-2xl  ${tab=="overview"?"border-b-2 border-red-400 text-red-400":"none"}`} onClick={()=>{settab("overview")}}>Overview</button>
<button className={`text-2xl  ${tab=="Reviews"?"border-b-2 border-red-400 text-red-400":"none"}`} onClick={()=>{settab("Reviews")}}>Reviews</button>
<button className={`text-2xl  ${tab=="photos"?"border-b-2 border-red-400 text-red-400":"none"}`} onClick={()=>{settab("photos")}}>Photos</button>
<button className={`text-2xl  ${tab=="menu"?"border-b-2 border-red-400 text-red-400":"none"}`} onClick={()=>{settab("menu")}}>Menu</button>
{role=="seller" && (<button className={`text-2xl  ${tab=="myitems"?"border-b-2 border-red-400 text-red-400":"none"}`} onClick={()=>{settab("myitems")}}>Manage</button>)}

</div>
    </div>

{tab=="overview" && (<>
<div className='p-4 rounded-xl shadow-sm mt-6 z-1 '>
<div className='flex justify-between mb-8'>
    <div className='text-4xl'>Menu</div>
    <button className='text-xl text-red-300' onClick={()=>{settab("menu")}}>See entire Menu</button>
</div>
 <div>
     <div className='text-2xl text-grey-300 mb-4'>Cuisines</div>
  <div className='flex gap-8'>
    <div className='rounded-4xl border p-2 pr-4 pl-4 border-gray-400'>North Indian</div>
    <div className='rounded-4xl border p-2 pr-4 pl-4  border-gray-400'>South Indian</div>
    <div className='rounded-4xl border p-2 pr-4 pl-4  border-gray-400'>Italian</div>
    <div className='rounded-4xl border p-2 pr-4 pl-4  border-gray-400'>Turkish</div>
    <div className='rounded-4xl border p-2 pr-4 pl-4  border-gray-400'>Mughali</div>
  </div>
 </div>
</div>

    <div className='p-4 rounded-xl shadow-sm mt-6 z-1 mb-3 '>
        <div className='text-4xl mb-5'>Average cost</div>
        <div className='text-2xl'>$100 for two  people (approx.) Without alcohol</div>
        <div className='text-gray-500'>Exclusive of applicable taxes and charges, if any</div>
        <div className='mt-10'>
            <div className='text-xl'>Cash and Cards accepted</div>
            <div className='text-xl'>Digital payments accepted</div>
        </div>
    </div>
</>)}

{tab=="Reviews" && (<>

<div className='text-4xl mt-4 mb-4'>Noor-us-sabah Reviews</div>

<div className='grid grid-cols-3'>
    <div className='p-4  rounded-xl m-4 bg-gray-50'>
   <div className='flex justify-between'>
     <div className='flex gap-2'>
        <User size={28} />
         <div className='text-3xl'>Jenna Wellson</div>
   </div>
    <div className=' mt-4 h-8 bg-green-900  w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>4.2</div>

   </div>
    
        <div className='text-xl text-gray-800 mt-5'>Very Delicious</div>
</div>

<div className='p-4  rounded-xl m-4 bg-gray-50'>
   <div className='flex justify-between'>
     <div className='flex gap-2'>
     <User size={28} />
         <div className='text-3xl'>Huffle Grey</div>
    </div>
    <div className=' mt-4 h-8 bg-green-900 w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>3.2</div>
   </div>
        <div className='text-xl text-gray-800 mt-5'>Miss management of order</div>
</div>

<div className='p-4  rounded-xl m-4 bg-gray-50'>
    <div className='flex justify-between'>
   <div className='flex gap-2'>
     <User size={28} />
         <div className='text-3xl'>Jimm Parker</div>
    </div>
    <div className=' mt-4 h-8 bg-green-900 w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>4.6</div>
    </div>
        <div className='mt-5 flex justify between'>
            <div className='text-xl text-gray-800 '>Delightfull Feast</div>
            <div>fdgfdg</div>
        </div>
</div>



<div className='p-4  rounded-xl m-4 bg-gray-50'>
   <div className='flex justify-between'>
     <div className='flex gap-2'>
        <User size={28} />
         <div className='text-3xl'>Mariane Wills</div>
   </div>
    <div className=' mt-4 h-8 bg-green-900  w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>4.2</div>

   </div>
    
        <div className='text-xl text-gray-800 mt-5'>No sauces provided</div>
</div>

<div className='p-4  rounded-xl m-4 bg-gray-50'>
   <div className='flex justify-between'>
     <div className='flex gap-2'>
     <User size={28} />
         <div className='text-3xl'>Mike John</div>
    </div>
    <div className=' mt-4 h-8 bg-green-900 w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>3.2</div>
   </div>
        <div className='text-xl text-gray-800 mt-5'>Lack of crockeries provided</div>
</div>

<div className='p-4  rounded-xl m-4 bg-gray-50'>
    <div className='flex justify-between'>
   <div className='flex gap-2'>
     <User size={28} />
         <div className='text-3xl'>Edea Turnes</div>
    </div>
    <div className=' mt-4 h-8 bg-green-900 w-18 rounded-md flex items-center justify-center mr-2 text-2xl text-white'>4.6</div>
    </div>
        <div className='mt-5 flex justify-between'>
            <div className='text-xl text-gray-800 '>Delightfull Feast</div>
           <button>Like</button>
        </div>
</div>
</div>

</>)}

{tab=="menu" && (<>

{/* <div className='flex border-b border-gray-300 p-10 gap-10'>
    <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c" alt="" 
    className='rounded-xl h-40 w-35'/>
<div>
    <div className='text-4xl pb-5'>Sushi</div>
    <div className='text-gray-500 text-xl'>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
</div>
</div>

<div className='flex border-b border-gray-300 p-10 gap-10'>
    <img src="https://crazyaboutpizza.in/pizza/White%20Sauce%20Pasta.jpg " alt="" 
    className='rounded-xl h-40 w-35'/>
<div>
    <div className='text-4xl pb-5'>White sauce pasta</div>
    <div className='text-gray-500 text-xl'>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
</div>
</div>

<div className='flex border-b border-gray-300 p-10 gap-10'>
    <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002" alt="" 
    className='rounded-xl h-40 w-35'/>
<div>
    <div className='text-4xl pb-5'>Pizza</div>
    <div className='text-gray-500 text-xl'>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
</div>
</div> */}

<div className='grid grid-cols-4  m-1'>
 <div className="rounded-xl shadow-2xl m-4 ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
              alt=""
              className="object-fit h-40 w-full rounded-xl"
            />
          </div>
          <div className="p-2 ">
            <div className="flex pb-2 ">
              <div className="font-semibold text-xl ">Sushi</div>
            </div>
            
             <div className='text-gray-500 '>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
          <button className='bg-red-600 mb-1 py-1  px-2 mt-2 rounded-md text-white'>Add to cart</button>
          </div>
        </div>

  {/* 2       */}

<div className="rounded-xl shadow-2xl m-4 ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
              alt=""
              className="object-fit h-40 w-full rounded-xl"
            />
          </div>
          <div className="p-2 ">
            <div className="flex pb-2 ">
              <div className="font-semibold text-xl ">Pizza</div>
            </div>
            
             <div className='text-gray-500 '>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
          <button className='bg-red-600 mb-1 py-1  px-2 mt-2 rounded-md text-white'>Add to cart</button>
          </div>
        </div>

        {/* 3 */}

        <div className="rounded-xl shadow-2xl m-4 ">
          <div>
            <img
              src="https://crazyaboutpizza.in/pizza/White%20Sauce%20Pasta.jpg"
              alt=""
              className="object-fit h-40 w-full rounded-xl"
            />
          </div>
          <div className="p-2 ">
            <div className="flex pb-2 ">
              <div className="font-semibold text-xl ">White sauce Pasta</div>
            </div>
            
             <div className='text-gray-500 '>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
          <button className='bg-red-600 mb-1 py-1  px-2 mt-2 rounded-md text-white'>Add to cart</button>
          </div>
        </div>

        {/* 4 */}

        <div className="rounded-xl shadow-2xl m-4 ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
              alt=""
              className="object-fit h-40 w-full rounded-xl"
            />
          </div>
          <div className="p-2 pl-3 ">
            <div className="flex pb-2 ">
              <div className="font-semibold text-xl ">Global Fussion</div>
            </div>
            
             <div className='text-gray-500 '>Layers Of Sponge, Chocolate Cream And Mouth Melting Truffle Sauce</div>
           <button className='bg-red-600 mb-1 py-1  px-2 mt-2 rounded-md text-white'>Add to cart</button>
          </div>
        </div>

</div>





</>)}

{tab=="photos" && (<>

<div className='grid grid-cols-6 gap-2 pt-8'>
  <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601" alt="Pasta" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c" alt="Sushi" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002" alt="Pizza" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141" alt="White Sauce Pasta" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Food" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1547592180-85f173990554" alt="Restaurant Food" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Hotel" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791" alt="Hotel Room" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7" alt="Hotel Interior" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" alt="Hotel Room" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Restaurant" className='rounded-xl object-cover h-40 w-full' />
  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Restaurant Interior" className='rounded-xl object-cover h-40 w-full' />
</div>

</>)}



    </div>

  )
}
export default RestaurauntPage;
