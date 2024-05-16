import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import piechart from './piechart.png'
import barGraph from './bargraph.png'
import Image from 'next/image';
const ViewPage = () => {
  return (
    <>
     
      <div className="flex ">
   <div className="flex justify-center align-middle items-center   px-3 py-2">
     
     <div className="bg-[#6CCAC9] ">
 <PersonIcon className='size-20 text-white p-3 m-6'/>
 
         </div>
         <div className='text-center p-3 m-6 text-gray-400 ' >
         17  <p>New Users</p>
         </div>
     </div>
 
     <div className="flex justify-center align-middle items-center  px-3 py-2">
      
      <div className="bg-[#FF6C60] ">
  <PersonIcon className='size-20 text-white p-3 m-6'/>
  
          </div>
          <div className='text-center p-3 m-6 text-gray-400  ' >
          213 <p>Purchase</p>
          </div>
      </div>
      <div className="flex justify-center align-middle items-center  px-3 py-2">
     
     <div className="bg-[#F8D347] ">
 <PersonIcon className='size-20 text-white p-3 m-6'/>
 
         </div>
         <div className='text-center  p-3 m-6 text-gray-400 ' >
         17  <p>New Users</p>
         </div>
     </div>
 
     <div className="flex justify-center align-middle items-center   px-3 py-2">
      
      <div className="bg-[#57C8F2] ">
  <PersonIcon className='size-20 text-white p-3 m-6 '/>
  
          </div>
          <div className='text-center p-3 m-6 text-gray-400 ' >
          17  <p>New Users</p>
          </div>
      </div>
   </div>

   <div className="flex ">
        <div className="box border">
        <p className='px-5 py-3 font-bold text-lg '>Order</p>
        <hr />  
           <Image src={piechart} className=''/>   
        </div>
        <div className="box border">
           <p className='px-5 py-3 font-bold text-lg'>Payment</p>  
           <Image src={barGraph} className='w-[700px] h-[430px]'/>   
        </div>
   </div>
    </>
  )
}

export default ViewPage