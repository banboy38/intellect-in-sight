export default function SideBar({settoggle, toggle, setusecase, setConversation}){

    return(
        <div className=" fixed left-0 bottom-0 w-[16rem] h-[100vh] overflow-y-auto text-white bg-blue-800 flex flex-col justify-start items-center">

            <div className="mt-[5.5rem] w-full p-3 flex flex-col gap-3">
                
                <h6 className=" mb-3 text-xl font-semibold">IntellectInSight</h6>

                {/* Usecase selection form */}
                <form className=" flex flex-col gap-2">
                    <div className="text-xs">Choose Your Usecase</div>
                    
                    <select onChange={(e)=>{setusecase(e.target.value); setConversation([["bot","Hello! I'm your Bot!"]])}} name="usecase" id="usecase">
                        <option value="Usecase 1">Usecase 1</option>
                        <option value="Usecase 2">Usecase 2</option>
                        <option value="Usecase 3">Usecase 3</option>
                        <option value="Usecase 4">Usecase 4</option>
                    </select>

                </form>

                {/* Register usecase button (Toggle) */}
                <input onClick={()=>{settoggle(1-toggle)}} className=" rounded p-[7px] text-sm  duration-300 ease-in-out hover:bg-blue-950 border-white border hover:cursor-pointer" type="submit" value={toggle?"Register New Usecase":"Cancel"}/>

                {/* Upload CSV Button */}
                <input className=" rounded p-[7px] text-sm bg-blue-900 duration-300 ease-in-out hover:bg-blue-950  hover:cursor-pointer" type="submit" value={"Upload CSV"}/>

        
                {/* A white line for aesthetics */}
                <div className="flex justify-between items-center my-1">
                    <div className="w-[100%] h-[1px] bg-white"></div>
                </div>

            </div>
            
        </div>
    )
}