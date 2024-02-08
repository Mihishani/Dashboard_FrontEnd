import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Header = ()=>{

    return(
        <div className={'absolute text-blue-300 bg-white h-[80px] w-screen '}>
             <div className={'w-[50px] sm:w-[50px] md:w-[450px] relative justify-between items-center top-5 bottom-5 left-[250px]  '}>
                 <input type={'text'}  placeholder={'Search for...'} className={'border-gray-200 border p-2 px-4 rounded-lg w-full' }/>
                 <button className={'bg-blue-500 hover:bg-blue-300   relative w-[41px] h-[41.5px] top-[-41.7px] rounded-r-lg left-[414.5px] '}>
                     <FaSearch className={'relative right-1 left-3 text-white fixed'}/>
                 </button>

               {/*  <div className={'relative left-[850px] flex top-[-70px]'}>
                     <FaBell className={'text-gray-300  h-8 w-4 '}/>
                     <div className={'bg-red-500 rounded w-[17px] h-[13px] text-[9px]  absolute left-2 top-1 text-white grid place-items-center'}>
                       3+
                     </div>
                 </div>

                 <div className={'relative left-[900px] flex top-[-102px]'}>
                     <FaEnvelope  className={'text-gray-300  h-8 w-5 '}/>
                     <div className={'bg-red-500 rounded w-[15px] h-[13px] text-[9px]  absolute left-2 top-1 text-white grid place-items-center'}>
                         7
                     </div>
                 </div>

          */}


             </div>




        </div>
    )
}
export default Header;