

const Table = () => {
    return (
        <div>

            {/* Creating the table for the user details  */}
            <div className="overflow-hidden relative overflow-x-auto">
                <table className="  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="w-2xl mx-8 text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                        <tr>
                            <div className=" mycontainer flex justify-between items-center px-4 py-4 h-10">
                                <th scope="col" className="px-2 py-3">
                                    #
                                </th>
                                <img className=' items-center flex' src="/action.png" width={15} height={15} alt="" />
                                <div className="w-40 flex justify-between items-center">
        
                                <th scope="col" className=" px-6 py-3">
                                    <span className=' items-center' >Job Request</span>
                                </th>
                                </div>

                                <img className=' mx-1 items-center flex' src="/downArrow.png" width={15} height={15} alt="" />
                                <img className=' items-center flex' src="/calender.png" width={15} height={15} alt="" />
                                <div className="w-28 flex justify-between items-center">

                                <th scope="col" className=" px-6 py-3">
                                    <span className=' items-center' >Submitted</span>
                                </th>
                                </div>

                                <img className='mx-1 items-center flex' src="/downArrow.png" width={15} height={15} alt="" />
                                <img className=' items-center flex' src="/downArrowCircle.png" width={15} height={15} alt="" />
                                <th scope="col" className=" px-6 py-3">
                                    <span className=' items-center' >Status</span>
                                </th>
                                <img className='mx-1 items-center flex' src="/downArrow.png" width={15} height={15} alt="" />
                                <img className=' items-center flex' src="/account.png" width={15} height={15} alt="" />
                                <th scope="col" className=" px-6 py-3">
                                    <span className=' items-center' >Submitter</span>
                                </th>
                                <img className='mx-1 items-center flex' src="/downArrow.png" width={15} height={15} alt="" />
                                <img className=' items-center flex' src="/url.png" width={15} height={15} alt="" />
                                <th scope="col" className="px-6 py-3">
                                    <span className=' items-center' >Url</span>
                                </th>
                                <img className='mx-1 items-center flex' src="/downArrow.png" width={15} height={15} alt="" />
                                <img className=' items-center flex' src="/assigned.png" width={15} height={15} alt="" />
                                <th scope="col" className="px-6 py-3">
                                    <span className=' items-center' >Assigned</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className=' items-center' >Priority</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className=' items-center' >Due Date</span>
                                </th>
                              
                                <th scope="col" className="px-6 py-3">
                                    <span className=' items-center' >Est. Value</span>
                                </th>
                                
                            </div>
                        </tr>
                    </thead>
                    {/* Passing the details of the user */}
                    <tbody >

                        <tr className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <div className=" flex  items-center px-2 py-2 h-10">
                                <th scope="row" className="px-3 py-1 font-medium text-black">
                                    1
                                </th>
                                <div className=" m-auto justify-between items-center">
                                    <td className="m-2 px-2 py-2 font-bold">
                                        Launch social media campign for pro...
                                    </td>
                                </div>
                                <td className="m-4 px-1 py-1">
                                    15-11-2024
                                </td>
                                 <td className="m-4 px-1 py-1 bg-amber-200 rounded-lg">
                                    In-process
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Aisha-patel
                                </td>
                                <td className="m-4 px-1 py-1 ">
                                    www.aishapatel...
                                </td>
                                 <td className="m-2 px-1 py-1 ">
                                    Sophie Choudhury
                                </td>
                                <td className="m-4 px-1 py-1 text-yellow-400">
                                    Medium
                                </td>
                                <td className="m-2 px-1 py-1">
                                    20-11-2024
                                </td>
                                <td className="m-2 px-1 py-1">
                                    6,200,000₹
                                </td>
                            </div>
                        </tr>

                        <tr className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <div className=" flex  items-center px-2 py-2 h-10">
                                <th scope="row" className="px-3 py-1 font-medium text-black">
                                    2
                                </th>
                                <div className=" m-auto justify-between items-center">
                                    <td className="m-2 px-2 py-2 font-bold">
                                      Update press kit for company redesign
                                    </td>
                                </div>
                                <td className="m-4 px-1 py-1">
                                    28-10-2024
                                </td>
                                 <td className="m-4 px-1 py-1 bg-blue-200 rounded-lg">
                                    need to start
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Irfan khan
                                </td>
                                <td className="m-4 px-1 py-1 ">
                                    www.irfankhanp...
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Tejas pandey
                                </td>
                                <td className="m-4 px-1 py-1 text-red-600">
                                    High
                                </td>
                                <td className="m-2 px-1 py-1">
                                    30-10-2024
                                </td>
                                <td className="m-4 px-1 py-1">
                                    3,500,000₹
                                </td>
                            </div>
                        </tr>

                         <tr className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <div className=" flex  items-center px-2 py-2 h-10">
                                <th scope="row" className="px-3 py-1 font-medium text-black">
                                    3
                                </th>
                                <div className=" m-auto justify-between items-center">
                                    <td className="m-2 px-2 py-2 font-bold">
                                       Finalize user testing feedback for app...               
                                    </td>
                                </div>
                                <td className="m-4 px-1 py-1">
                                    05-12-2024
                                </td>
                                 <td className="m-4 px-1 py-1 bg-amber-200 rounded-lg">
                                    In-process
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Mark Johnson
                                </td>
                                <td className="m-4 px-1 py-1 ">
                                    www.markjohns...
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Rachel lee
                                </td>
                                <td className="m-3 px-1 py-1 text-yellow-400">
                                    Medium
                                </td>
                                <td className="m-3 px-1 py-1">
                                    10-12-2024
                                </td>
                                <td className=" px-1 py-1">
                                    4,750,000₹
                                </td>
                            </div>
                        </tr>

                         <tr className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <div className=" flex  items-center px-2 py-2 h-10">
                                <th scope="row" className="px-3 py-1 font-medium text-black">
                                    4
                                </th>
                                <div className=" m-auto justify-between items-center">
                                    <td className="m-4 px-2 py-2 font-bold">
                                        Design new features for the website
                                    </td>
                                </div>
                                <td className="m-4 px-1 py-1">
                                    10-01-2025
                                </td>
                                 <td className="m-4 px-1 py-1 bg-green-600 rounded-lg">
                                    Complete
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Emily Green
                                </td>
                                <td className="m-4 px-1 py-1 ">
                                    www.emilygreen...
                                </td>
                                 <td className="m-5 px-1 py-1 ">
                                    Tom Wright
                                </td>
                                <td className="m-3 px-1 py-1 text-blue-400">
                                    Low
                                </td>
                                <td className="m-3 px-1 py-1">
                                    15-01-2025
                                </td>
                                <td className="m-4 px-1 py-1">
                                    5,900,000₹
                                </td>
                            </div>
                        </tr>

                         <tr className="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <div className=" flex  items-center px-2 py-2 h-10">
                                <th scope="row" className="px-3 py-1 font-medium text-black">
                                    5
                                </th>
                                <div className=" m-auto justify-between items-center">
                                    <td className="m-2 px-2 py-2 font-bold">
                                        Prepare financial report for Q4
                                    </td>
                                </div>
                                <td className="m-5 px-1 py-1">
                                    25-01-2025
                                </td>
                                 <td className="m-4 px-1 py-1 bg-red-600 rounded-lg">
                                    Blocked
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Jessica brown
                                </td>
                                <td className="m-4 px-1 py-1 ">
                                    www.jessicabro...
                                </td>
                                 <td className="m-4 px-1 py-1 ">
                                    Kevin Smith
                                </td>
                                <td className="m-5 px-1 py-1 text-blue-400">
                                    Low
                                </td>
                                <td className="m-2 px-1 py-1">
                                    30-01-2025
                                </td>
                                <td className="m-4 px-1 py-1">
                                    2,800,000₹
                                </td>
                            </div>
                        </tr>



                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
