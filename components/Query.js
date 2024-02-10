import { FaUserCircle } from "react-icons/fa";


export default function Query({text}){
    return(

        // Query Chatbox
        <div className="flex gap-3 justify-end items-center ">
            <div className="rounded min-w-[30%] p-3 bg-blue-800 text-white shadow-md break-words hover:scale-[1.01] duration-300 ease-in-out">{text}</div>
            <div className="w-[2rem]"><FaUserCircle size={30} color="rgb(30 64 175)"/></div>
        </div>
    )
}