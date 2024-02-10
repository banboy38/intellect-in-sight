import Register from "./Register";
import Bot from "./Bot";
import { useState } from "react";

export default function Main({toggle, usecase, conversation, setConversation}){

    return(
        <div className=" mt-[4rem] ml-[15rem] w-[81vw] h-[89.2vh] flex justify-center items-center bg-gray-100">
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