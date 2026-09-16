import React from 'react'
import Biryani from "../src/assets/Biryani.webp"
import Biryanicon from "../src/assets/Biryanicon.jpg"
import Pizza from "../src/assets/Pizzza.png"
import Pastry from "../src/assets/Pastry.jpeg"
import Chinese from "../src/assets/Noodles.jpeg"
import Indian from  "../src/assets/Indianpage.jpeg"
import Chicken from  "../src/assets/Chicken.jpeg"
import Burger from  "../src/assets/Burger.jpeg"
import Beverages from  "../src/assets/Bevarages.jpeg"
import Tabakh from  "../src/assets/Tabakh.webp"
import GF from  "../src/assets/Globalfusion.jpg"
import Arabian from  "../src/assets/Arabian.jpg"
import Sweet from  "../src/assets/Sweet.webp"
const RestaurauntList = () => {
    const images= [Pastry,Pizza,Beverages,Chicken,Chinese,Burger,Indian]
  return (
    <div>
        <div className='bg-pink-50 grid grid-cols-2 px-10 py-16 pb-0'>
      <div>
        <h1 className='font-semibold text-7xl not-italic text-gray-900'> Restaurant </h1>
        <p className='mt-3 font-semibold text-3xl'>Discover great food, great Restaurants</p>
        <p className='mt-4 text-gray-500 text-xl'>Explore top-rated restaurants near you and enjoy </p>
        <p className='text-gray-500 text-xl'> delicious food delivered at ur doorstep</p>
        <div className='flex gap-4 mt-10'>
            <input type="text" className='bg-white p-4 w-134 rounded-2xl border-none text-gray-500' placeholder='Search for restaurant, dishes, cuisines'  />
            <button className='flex justify-center items-center rounded-2xl text-white p-4 px-10 bg-red-400'>Search</button>
        </div>
      </div>
      <div className='flex justify-end'>
        <img src={Biryani} alt=""  className='h-100 '/>
      </div>
    </div>

    <div className='p-6 pl-15'>
        <h3 className='font-semibold text-3xl mb-7'>Popular Cuisines</h3>
    <div className=' grid grid-cols-8'>
{/* 1 */}
     {/* <div>
        <img src={Biryanicon} alt="" className='mb-2 h-20 w-20'/>
        <div className='flex pl-2'>Biryani</div>
     </div> */}
     
    {images.map((i)=>(
         <div>
        <img src={i} alt="" className='mb-0 h-40 w-40 m-4 bg-white'/>
        <div className='flex  justify-center pr-8'><div>{String(i).slice(-12,-1)}</div></div>
     </div>
    ))}

    </div>
    </div>

    <div className='flex justify-between mt-3 pl-15'>
        <h3 className='font-semibold text-3xl mb-7'>Restauraunts near u</h3>
    </div>
    <div className='grid grid-cols-4 px-15 m-4'>
    
{/* 1 */}
 <div className='rounded-xl shadow-xl m-4 '>
      <div>
        <img src={GF} alt="" className='object-fit h-60 w-full rounded-xl'/>
      </div>
     <div className='p-4'>
       <div className='flex pb-2 '><div className='font-semibold text-xl '>Global Fussion</div></div>
      <div> <div className="ml-4 h-5 bg-green-900 w-10 rounded-md flex items-center justify-center  text-sm text-white" >4.5</div></div>
      <div className='text-gray-500 pt-2'>North Indian, Chinese,Fast Food</div>
      <div className='text-gray-500 pt-2'>$150 for two</div>

     </div>
     </div>

     {/* 2 */}
      <div className='rounded-xl shadow-xl m-4 '>
      <div>
        <img src={Tabakh} alt="" className='object-fit h-60 w-full rounded-xl'/>
      </div>
     <div className='p-4'>
       <div className='flex pb-2 '><div className='font-semibold text-xl '>Tabakh</div></div>
      <div> <div className="ml-4 h-5 bg-green-900 w-10 rounded-md flex items-center justify-center  text-sm text-white" >4.5</div></div>
      <div className='text-gray-500 pt-2'>North Indian, Chinese,Fast Food</div>
      <div className='text-gray-500 pt-2'>$150 for two</div>

     </div>
     </div>

     {/* 3 */}
      <div className='rounded-xl shadow-xl m-4'>
      <div>
        <img src={Sweet} alt="" className='object-fit h-60 w-full rounded-xl'/>
      </div>
     <div className='p-4'>
       <div className='flex pb-2 '><div className='font-semibold text-xl '>Sweet Tooth</div></div>
      <div> <div className="ml-4 h-5 bg-green-900 w-10 rounded-md flex items-center justify-center  text-sm text-white" >4.5</div></div>
      <div className='text-gray-500 pt-2'>North Indian, Chinese,Fast Food</div>
      <div className='text-gray-500 pt-2'>$150 for two</div>

     </div>
     </div>

     {/* 4 */}

      <div className='rounded-xl shadow-xl m-4 '>
      <div>
        <img src={Arabian} alt="" className='object-fit h-60 w-full rounded-xl'/>
      </div>
     <div className='p-4'>
       <div className='flex pb-2 '><div className='font-semibold text-xl '>Arabian Chillies</div></div>
      <div> <div className="ml-4 h-5 bg-green-900 w-10 rounded-md flex items-center justify-center  text-sm text-white" >4.5</div></div>
      <div className='text-gray-500 pt-2'>Arabian food, Shawarma,Fala fal</div>
      <div className='text-gray-500 pt-2'>$150 for two</div>

     </div>
     </div>


    </div>
    
    </div>
    
  )
}

export default RestaurauntList
