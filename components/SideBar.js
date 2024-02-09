export default function SideBar({settoggle, toggle, setusecase}){

    return(
        <div className=" fixed left-0 bottom-0 w-[15rem] h-[100vh] overflow-y-auto text-white bg-blue-800 flex flex-col justify-start items-center">

            <div className="mt-[6rem] w-full p-3 flex flex-col gap-3">
                
                <h6 className=" mb-3 text-xl font-semibold">IntellectInSight</h6>

                <form className=" flex flex-col gap-2">
                    <div className="text-xs">Choose Your Usecase</div>
                    
                    <select onChange={(e)=>{setusecase(e.target.value)}} name="usecase" id="usecase">
                        {/* <option value="">Select Usecase</option> */}
                        <option value="Usecase 1">Usecase 1</option>
                        <option value="Usecase 2">Usecase 2</option>
                        <option value="Usecase 3">Usecase 3</option>
                        <option value="Usecase 4">Usecase 4</option>
                    </select>

                </form>

                <input onClick={()=>{settoggle(1-toggle)}} className=" rounded p-[5px] text-sm  duration-300 ease-in-out hover:bg-blue-950 border-white border hover:cursor-pointer" type="submit" value={toggle?"Register New Usecase":"Cancel"}/>

        
                <input className=" rounded p-[5px] text-sm bg-blue-900 duration-300 ease-in-out hover:bg-blue-950  hover:cursor-pointer" type="submit" value={"Upload CSV"}/>

        

                <div className="flex justify-between items-center my-1">
                    <div className="w-[100%] h-[1px] bg-white"></div>
                </div>

            </div>
            
        </div>
    )
}