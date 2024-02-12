import Main from "@/components/Main";
import SideBar from "@/components/SideBar";
import { useState } from "react";

export default function Home() {
  const [toggle, settoggle] = useState(1)
  const [usecase, setusecase] = useState("Usecase 1")
  const [conversation, setConversation] = useState([["bot","Hello! I'm your Bot!"]])

  return (
    <>
      {/* Sidebar for options */}
      <SideBar setConversation={setConversation} setusecase={setusecase} settoggle={settoggle} toggle={toggle}/>
      
      <div className="bg-gray-100 flex justify-start items-center">
        <Main conversation={conversation} setConversation={setConversation} usecase={usecase} toggle = {toggle}/>
      </div>
    </>
  );
}
