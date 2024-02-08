import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const Body =()=>{
    return(
        <div className={'max-w-full h-[920px]   absolute left-[220px] top-[100px]  flex-auto'}>
            <h1 className={' text-gray-700  text-3xl font-sans relative left-10 top-5'}>Dashboard

            </h1>

            <button className={'bg-blue-600 rounded-md text-gray-300 w-[150px] h-10 relative left-[1100px]  justify-between items-center text-sm'}>
                <FaDownload  className={'absolute h-6 w-3 top-2 left-2 '}/>
                 Generate  Report
            </button>

            <div className="row ">


                <div className={" col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px] relative left-10 top-4"}>
                    <div className={"card  border-l-4 border-blue-600  rounded-l-lg shadow h-100 py-6"}>
                        <div className={"card-body"}>
                            <div className={"row flex gap-0 items-center"}>
                                <div className={"col mr-2"}>
                                    <div className={"text-xs font-semibold text-primary uppercase text-blue-600 mb-1 relative left-6"}>
                                        Earnings (Monthly)</div>
                                    <div className={"text-lg mb-0 font-bold text-gray-600 relative left-6"}>$40,000</div>
                                </div>
                                <div className={"col-auto"}>
                                    <FaCalendar  className={'text-gray-300 w-10 h-7 relative left-14'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 md:col-span-6 mb-4 bg-white rounded w-[300px]">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Earnings (Annual)</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                </div>

        </div>
    )
}
export default Body;