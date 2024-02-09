import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";


export default function Bot({usecase}){
    return(
        <div className=" w-[70%] h-[90%]  bg-white rounded-md shadow-xl flex flex-col">

            <div className="flex flex-col gap-1 w-[100%] p-[2rem]">
                <h6 className=" text-3xl font-semibold">Ask me anything regarding {usecase}</h6>
                <div className="text-xs text-gray-500">Please perform any conversational analysis on {usecase}</div>
            </div>

            <div className="h-[60%] w-[100%] bg-gray-100 overflow-auto px-5 py-3">
                <FaRobot color="rgb(30 64 175)"/>
            </div>

            <form className="h-[4rem] px-6 focus:border flex justify-center items-center">
                <input type="text" className="w-[100%] h-[100%] text-gray-500"/>

                <button className="text-gray-500 hover:text-blue-800 duration-300 ease-in-out"><IoSend/></button>
            
            </form>
        </div>
    )
}
