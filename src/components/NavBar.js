import { GoGlobe } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

export default function NavBar(){
    return(
        <div className="h-[4rem] w-[100%] bg-blue-800 flex justify-center items-center fixed top-0 left-0 z-10">
            
            <div className=" w-[90%] flex justify-between">
                {/* <img src="/kpkp.svg"/> */}
                <Image src="/kpkp.svg" width={100} height={50}/>
                
                <div className=" w-[4rem] flex justify-around items-center">
                    <div className="flex text-white">
                        <GoGlobe color="white"/>
                        {/* English */}
                    </div>
                    <div className="w-[1px] h-[2rem] bg-white"></div>
                    <div>
                        <FaUserCircle color="white"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}