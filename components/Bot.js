import { IoSend } from "react-icons/io5";
import Reply from "./Reply";
import Query from "./Query";
import { useState } from "react";


export default function Bot({usecase, conversation, setConversation}){

    const [query, setQuery] = useState("")

    function handleQuery(e){
        e.preventDefault()

        let temp = conversation
        temp.push(["user", query])
        
        setConversation(temp)
        setQuery("")

        setTimeout(() => {
        }, 700);
        
        temp.push(["bot","I'm fine, how are you?"])
        setConversation(temp)
    }

    return(
        <div className=" w-[90%] h-[90%]  bg-white rounded-md shadow-xl flex flex-col">
            
            {/* Heading section */}
            <div className="flex flex-col gap-1 w-[100%] p-[1rem]">
                <h6 className=" text-2xl font-semibold">Ask me anything regarding {usecase}</h6>
                <div className="text-xs text-gray-500">Please perform any conversational analysis on {usecase}</div>
            </div>

            {/* Conversation section */}
            <div className="h-[80%] w-[100%] bg-gray-100 overflow-auto text-xs px-5 py-3 flex flex-col gap-3">
                {
                    conversation.map((item)=>{
                        return(
                            <>
                                {
                                    item[0] === "bot"
                                    ?
                                    <Reply text={item[1]}/>
                                    :
                                    <Query text={item[1]}/>
                                }
                            </>
                        )
                    })
                }
            </div>
            
            {/* Query input section */}
            <form className="h-[4rem] px-6 focus:border flex justify-center items-center">
                <input value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" className="w-[100%] h-[100%] text-gray-500" placeholder="Enter query..."/>

                <button onClick={(e)=>{handleQuery(e)}} className="text-gray-500 hover:text-blue-800 duration-300 ease-in-out"><IoSend/></button>
            
            </form>
        </div>
    )
}