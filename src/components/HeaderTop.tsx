import React from "react";
import { ImWink2 } from "react-icons/im";
import { IoIosSpeedometer } from "react-icons/io";


const HeaderTop = ()=>{
    // @ts-ignore
    return(
        <div>
            <div className={'flex-wrap items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 h-[1000px] w-[220px] '}>
                <ImWink2 className={'icon relative left-6 top-8'}/>
                <div className={"SBAdmin text-xl font-sans  font-bold text-white relative top-0 left-[80px]"}>SB ADMIN<sup>2</sup></div>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[40px] left-2 w-[200px]"}/>
                <li className="nav-item flex">
                    <a className="nav-link" href="">
                        <IoIosSpeedometer className={'icon1 text-white relative h-10 w-5 top-12 left-5'}/>
                        <span className={'text-white text-l relative top-4 left-12'}>Dashboard</span></a>
                </li>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[43px] left-2 w-[200px]"}/>

                <div className={"sidebar-heading text-gray-300 text-xs font-bold relative top-12 left-2"}>
                    INTERFACE
                </div>

            </div>


        </div>
    )
}
export default HeaderTop;