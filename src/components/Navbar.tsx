

const Navbar = () => {
  return (
    // First creating navbar
    <div >
      <nav className='bg-white text-black border-2 border-red-500   ' >
        <div className="mycontainer flex justify-between items-center px-4 py-4 h-10">
          <div className="logo items-center flex text-white 2xl">
            <img className="mx-2" src="/file.png" width={15} height={15} alt="" />
            <div className="logo  items-center flex text-white 2xl">
              <span className=' items-center text-black' >Workplace</span>
              <img src="/arrow.png" width={15} height={15} alt="" />
              <span className=' items-center text-black' >Folder 2 </span>
              <img src="/arrow.png" width={15} height={15} alt="" />
              <span className='font-bold items-center text-black' >Spreadsheet 3 </span>
              <img src="/arrow.png" width={15} height={15} alt="" />
              <span className=' items-center flex text-black' >... </span>
            </div>
          </div>

          <div className="logo font-bold items-center flex text-white 2xl">
            <img className="mx-2" src="/search.png" width={15} height={15} alt="" />
            <input className="form-control mr-sm-2" type="search" placeholder="Search within sheet" aria-label="Search" />
            <button className='w-20 mx-1' onClick={() => console.log('You clicked on notification')}>
              <img src="/bell.png" width={25} height={25} alt="" />
            </button>
            <button className='w-10 mx-1' onClick={() => console.log('You clicked on account')}  >
              <img src="/account.png" width={25} height={25} alt="" />
            </button>
            <span className='font-bold flex items-center text-black'>John Doe </span>
          </div>
        </div>

        <hr />
        {/* Creating buttons for the different actions  */}
        <div className="mycontainer flex justify-between items-center px-4 py-4 h-10">
          <div className="logo items-center flex text-white 2xl">
            <div className=" logo  items-center flex text-white 2xl">
              <div className='mx-2 mycontainer flex justify-between items-center'>
                <button className='hover:bg-sky-500 items-center text-black' onClick={() => console.log('You clicked on Toolbar')} >Toolbar</button>
                <img className='' src="/arrow.png" width={15} height={15} alt="" />
                <img className='' src="/arrow.png" width={15} height={15} alt="" />
              </div>
              <div className='mx-2 mycontainer flex justify-between items-center'>
                <img className='mx-2' src="/hide.png" width={15} height={15} alt="" />
                <button onClick={() => console.log('You clicked on Folder')} className='hover:bg-sky-500  items-center text-black' >Folder 2 </button>
              </div>
              <div className='mx-2 mycontainer flex justify-between items-center'>
                <img src="/sort.png" width={20} height={20} alt="" />
                <button onClick={() => console.log('You clicked on Sort')} className='hover:bg-sky-500 font-bold items-center text-black' >Sort </button>
              </div>
              <div className='mx-2 mycontainer flex justify-between items-center'>
                <img src="/filter.png" width={20} height={20} alt="" />
                <button onClick={() => console.log('You clicked on Filter')} className='hover:bg-sky-500 font-bold items-center text-black' >Filter </button>
              </div>
              <div className='mx-2 mycontainer flex justify-between items-center'>
                <img src="/view.png" width={20} height={20} alt="" />
                <button onClick={() => console.log('You clicked on Cell view')} className='hover:bg-sky-500 font-bold items-center text-black' >Cell view </button>
              </div>
            </div>
          </div>

          <div className="logo items-center flex text-white 2xl">
            <div className="logo  items-center flex text-white 2xl">
              <div className=' border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                <img className='' src="/import.png" width={15} height={15} alt="" />
                <button onClick={() => console.log('You clicked on Import')} className='hover:bg-sky-500   items-center text-black' >Import</button>
              </div>
              <div className=' border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                <img className='' src="/export.png" width={15} height={15} alt="" />
                <button onClick={() => console.log('You clicked on Export')} className='hover:bg-sky-500   items-center text-black' >Export </button>
              </div>
              <div className=' border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                <img src="/share.png" width={20} height={20} alt="" />
                <button onClick={() => console.log('You clicked on Share')} className='hover:bg-sky-500  font-bold items-center text-black' >Share </button>
              </div>
              <div className='bg-green-800 border-2 border-gray-200 mx-2 mycontainer flex justify-between items-center'>
                <img src="/action.png" width={20} height={20} alt="" />
                <button onClick={() => console.log('You clicked on New action')} className='hover:bg-sky-500  font-bold items-center text-black my-2' >New action </button>
              </div>
            </div>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar
