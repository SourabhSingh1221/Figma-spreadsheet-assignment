const Footer = () => {
    return (
        <div className='overflow-hidden absolute bottom-0  my-6 bg-white text-black items-center w-full'>
            <div className=" logo font-bold text-black 2xl">
                <ul className="flex justify-baseline ">
                    <li className="mx-3 text-green-600 bg-green-300 ">All Orders </li>
                    <li className="mx-3">Pending</li>
                    <li className="mx-3">Reviewed</li>
                    <li className="mx-3">Arrived</li>
                <img src="/plus.png" width={15} height={15} alt="" />
                </ul>

            </div>
            <div className='flex'>

            </div>
        </div>
    )
}

export default Footer
