
import {FaUserCircle} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='w-full h-[65px] bg-cyan-600  flex justify-between items-center px-[30px]'>
        <h1 className='text-white font-semibold text-[20px]'>NOTES APP</h1>
        <FaUserCircle className='text-white text-[28px]'/>
    </nav>
  )
}

export default Navbar