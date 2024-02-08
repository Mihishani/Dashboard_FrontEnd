import React from "react";
import { ImWink2 } from "react-icons/im";
import { IoIosSpeedometer } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { TiSpanner } from "react-icons/ti";
import { FaFolder } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import Header from "@/components/Header";



const HeaderTop = ()=>{

    return(
<div className={'bg-gray-200 flex w-screen '}>
        <Header/>
        <div className={'relative '}>


            <div className={'flex-wrap items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 h-[1000px] w-[220px]'}>
                <ImWink2 className={'icon relative left-6 top-8'}/>
                <div className={"SBAdmin text-xl font-sans  font-bold text-white relative top-0 left-[80px]"}>SB ADMIN<sup>2</sup></div>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[40px] left-2 w-[200px]"}/>
                <li className="nav-item flex">
                    <a className="nav-link" href="">
                        <IoIosSpeedometer className={'icon1 text-white relative h-10 w-5 top-12 left-5'}/>
                        <span className={'text-white text-l relative top-4 left-12'}>Dashboard</span></a>
                </li>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[43px] left-2 w-[200px]"}/>

                <div className={"sidebar-heading text-blue-300 text-xs font-bold relative top-12 left-2"}>
                    INTERFACE
                </div>

                <li className={"nav-item flex "}>
                    <a className={"nav-link collapsed text-gray-300 hover:text-white"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <IoMdSettings className={'icon1   relative h-8 w-4 top-16 left-5'}/>
                        <span className={'text-[15px] relative top-9 left-10'}>Components</span>
                    </a>
               {/*     <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>*/}
                </li>


                <li className={"nav-item flex "}>
                    <a className={"nav-link collapsed text-gray-300 hover:text-white"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <TiSpanner className={'icon1   relative h-8 w-4 top-16 left-5'}/>
                        <span className={'text-[15px] relative top-9 left-10'}>Utilities</span>
                    </a>
                 {/*   <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>*/}
                </li>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[45px] left-2 w-[200px]"}/>

                <div className={"sidebar-heading text-blue-300 text-xs font-bold relative top-12 left-2"}>
                    ADDONS
                </div>

                <li className={"nav-item flex "}>
                    <a className={"nav-link collapsed text-gray-300 hover:text-white"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <FaFolder className={'icon1   relative h-8 w-4 top-16 left-5'}/>
                        <span className={'text-[15px] relative top-9 left-10'}>Pages</span>
                    </a>
                    {/*   <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <a className="collapse-item" href="buttons.html">Buttons</a>
                            <a className="collapse-item" href="cards.html">Cards</a>
                        </div>
                    </div>*/}
                </li>


                <li className={"nav-item flex "}>
                    <a className={"nav-link collapsed text-gray-300 hover:text-white"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <FaChartArea className={'icon1   relative h-8 w-4 top-16 left-5'}/>
                        <span className={'text-[15px] relative top-9 left-10'}>Charts</span>
                    </a>

                </li>

                <li className={"nav-item flex "}>
                    <a className={"nav-link collapsed text-gray-300 hover:text-white"} href="#" data-toggle="collapse" data-target="#collapseTwo"
                       aria-expanded="true" aria-controls="collapseTwo">
                        <FaTable className={'icon1   relative h-8 w-4 top-16 left-5'}/>
                        <span className={'text-[15px] relative top-9 left-10'}>Tables</span>
                    </a>

                </li>

                <hr className={"sidebar-divider my-0 border-gray-400 visible h-0 box-content relative top-[45px] left-2 w-[200px]"}/>

                <div className={'arr bg-gray-400 bg-opacity-45 hover:bg-gray-300 ' }>
                    <div className={'ArrowLeft'}></div>
                </div>
            </div>



        </div>

</div>
    )
}
export default HeaderTop;