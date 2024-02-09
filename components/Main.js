import Register from "./Register";
import Bot from "./Bot";

export default function Main({toggle, usecase}){
    return(
        <div className=" mt-[4rem] ml-[15rem] w-[80.5vw] h-[89.225vh] flex justify-center items-center ">
            {
                toggle
                ?
                <Bot usecase={usecase}/>
                :
                <Register/>
            }
        </div>
    )
}