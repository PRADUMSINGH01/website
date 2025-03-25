import Link from "next/link"

import { FaArrowRight } from "react-icons/fa6";

const Profile =()=>{



    return <div className="flex items-center  list-none justify-between w-38 mx-5 ">
        <li  className="p-2 px-4     rounded-lg mx-3  hover:text-white hover:bg-gray-600">
            <Link href={'/'}>Login</Link>
        </li>

        <li className="bg-blue-400 p-2 rounded-lg mx-3 hover:bg-blue-500
         hover:text-white flex items-center justify-between 
        tracking-wide border-black   shadow-xl
        hover:border-b-2">
            <Link href={'/'}>Register</Link>
            <FaArrowRight />

        </li>
    </div>
}

export default Profile