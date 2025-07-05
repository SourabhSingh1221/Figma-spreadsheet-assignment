

const Middle = () => {
    return (
        <div>
            <nav className='bg-white text-black border-2 border-red-500   ' >
                <div className="mycontainer flex justify-between items-center px-4 py-4 h-10">
                    <div className="logo items-center flex text-white 2xl">
                        <div className=" bg-gray-400 w-2xl logo  items-center flex text-white 2xl">
                            <div className='  border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                                <img className='mx-1' src="/link.png" width={15} height={15} alt="" />
                                <span className=' items-center text-black' >Q3 Financial overview</span>
                            </div>
                            <img className='mx-1' src="/refresh.png" width={15} height={15} alt="" />
                        </div>

                        <div className="mx-24 w-2xl flex justify-between items-center px-4 py-4 h-10">
                            <div className=" bg-green-400 logo items-center flex text-white 2xl "  >
                                <div className=' border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center' >
                                    <img className='mx-1' src="/action.png" width={15} height={15} alt="" />
                                    <span className=' items-center text-black'  >ABC ...</span>
                                </div>
                            </div>

                            <div className=" bg-purple-300 logo  items-center flex text-white 2xl">
                                <div className='border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                                    <img className='mx-1' src="/action.png" width={15} height={15} alt="" />
                                    <span className=' items-center text-black' >Answer a question...</span>
                                </div>
                            </div>
                            <div className=" bg-orange-300  logo  items-center flex text-white 2xl">
                                <div className='border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                                    <img className='mx-1' src="/action.png" width={15} height={15} alt="" />
                                    <span className=' items-center text-black' >Exract</span>
                                </div>
                            </div>
                            <div className="w-24 bg-orange-300  logo  items-center flex text-white 2xl">
                                <div className=' text-center border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                                    <img className='object-center mx-1' src="/plus.png" width={15} height={15} alt="" />
                                    <span className='items-center text-black' >       </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Middle
