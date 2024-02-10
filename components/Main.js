import Register from "./Register";
import Bot from "./Bot";
import { useState } from "react";

export default function Main({toggle, usecase, conversation, setConversation}){

    return(
        <div className=" w-[81vw] h-[89.1vh] flex justify-center items-center bg-gray-100">
            {
                toggle
                ?
                <Bot conversation={conversation} setConversation={setConversation} usecase={usecase}/>
                :
                <Register/>
            }
        </div>
    )
}