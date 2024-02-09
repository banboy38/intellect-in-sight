import Main from "../components/Main";
import SideBar from "../components/SideBar";
import { useState } from "react";

export default function Home() {
  const [toggle, settoggle] = useState(1)
  const [usecase, setusecase] = useState("Usecase 1")

  return (
    <div className="">
      <SideBar setusecase={setusecase} settoggle={settoggle} toggle={toggle}/>
      <Main usecase={usecase} toggle = {toggle}/>

    </div>
  );
}
