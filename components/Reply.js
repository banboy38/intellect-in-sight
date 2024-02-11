import { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function Reply({text}){

    const [loadText, setloadText] = useState("")

    useEffect(async () => {
        
        let s = ""
        for(let i = 0; i<text.length; i++){
            s += text[i]
            setloadText(s)
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }, [])
    
    
    return(

        // Reply Chatbox
        <div className="flex gap-3 justify-start items-center">
            <div className="w-[2rem]"><FaRobot size={30} color="rgb(30 64 175)"/></div>
            <div className="rounded min-w-[30%] p-3 bg-white shadow-md break-words hover:scale-[1.01] duration-300 ease-in-out">{loadText}</div>
        </div>
    )
}