import Register from "./Register";
import Bot from "./Bot";
import { useState } from "react";

export default function Main({toggle, usecase, conversation, setConversation}){

    return(

        // Toggle for Chatbot and Register Screen
        <div className=" ml-[16rem] w-[85vw] h-[89vh] flex justify-center items-center bg-gray-100">
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