import { useEffect, useState } from "react"

export default function Register(){

    const [autometadataChecked, setautometadataChecked] = useState(false)

    function focusOnURI(e){

        if(e.target.value){    
            document.getElementById("dbname").disabled = true
            document.getElementById("dbname").classList.add("bg-gray-200")

            document.getElementById("port").disabled = true
            document.getElementById("port").classList.add("bg-gray-200")

            document.getElementById("password").disabled = true
            document.getElementById("password").classList.add("bg-gray-200")

            document.getElementById("hostname").disabled = true
            document.getElementById("hostname").classList.add("bg-gray-200")
        }
        else{    
            document.getElementById("dbname").disabled = false
            document.getElementById("dbname").classList.remove("bg-gray-200")

            document.getElementById("port").disabled = false
            document.getElementById("port").classList.remove("bg-gray-200")

            document.getElementById("password").disabled = false
            document.getElementById("password").classList.remove("bg-gray-200")

            document.getElementById("hostname").disabled = false
            document.getElementById("hostname").classList.remove("bg-gray-200")
        }

    }
    

    function focusOnDB(e){

        if(e.target.value){
            document.getElementById("uri").disabled = true
            document.getElementById("uri").classList.add("bg-gray-200")
        }
        else{
            document.getElementById("uri").disabled = false
            document.getElementById("uri").classList.remove("bg-gray-200")
        }

    }

    function autometadata(){
        setautometadataChecked(!autometadataChecked)
    }
    

    return(
        <div className="w-[70%] min-h-[70%] max-h-[90%] text-black bg-white p-[1rem] rounded-md shadow-xl overflow-auto ">
            
            <form className="flex flex-col gap-2">

                <div className=" text-2xl text-blue-800 font-semibold">Register new usecase</div>
                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            UseCase Name
                        </div>
                        <input type="text" placeholder="UseCase Name" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Description
                        </div>
                        <input type="text" placeholder="Description" className="border border-gray-300 w-[100%]"/>
                    </div>
                </div>

                <div className=" text-xl text-blue-800 font-semibold">Connect to Database</div>

                <div className="flex gap-2">
                    <div className="w-1/2 font-semibold">
                        <div className="text-sm">
                            URI
                        </div>
                        <input onChange={(e)=>{focusOnURI(e)}} id="uri" type="text" placeholder="URI" className="border border-gray-300 w-[100%]"/>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Database Name*
                        </div>
                        <input id="dbname" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Database Name" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Password*
                        </div>
                        <input id="password" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Password" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Hostname*
                        </div>
                        <input id="hostname" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Hostname" className="border border-gray-300 w-[100%]"/>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Port*
                        </div>
                        <input id="port" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Port" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            Username
                        </div>
                        <input type="text" placeholder="Username" className="border border-gray-300 w-[100%]"/>
                    </div>      

                    <div className="w-1/3 font-semibold">
                        <div className="text-sm">
                            SID
                        </div>
                        <input type="text" placeholder="SID" className="border border-gray-300 w-[100%]"/>
                    </div>         
                </div>

                <div className="flex gap-2">
                    <div className="w-1/2 font-semibold">
                        <div className="text-sm">
                            ServiceName
                        </div>
                        <input type="text" placeholder="ServiceName" className="border border-gray-300 w-[100%]"/>
                    </div>

                    
                </div>

                <div className="flex flex-col gap-2">
                    <div className="font-semibold text-sm">
                        Server Type
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="MySQL" value={"MySQL"}/>
                            <label htmlFor="MySQL">MySQL</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="PostgreSQL" value={"PostgreSQL"}/>
                            <label htmlFor="PostgreSQL">PostgreSQL</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="SQLite" value={"SQLite"}/>
                            <label htmlFor="SQLite">SQLite</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="Oracle" value={"Oracle"}/>
                            <label htmlFor="Oracle">Oracle</label>
                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-between items-center w-[100%]">
                    <input onClick={(e)=>{e.preventDefault()}} className=" rounded p-[7px] text-sm text-white w-[12rem] bg-blue-900 duration-300 ease-in-out hover:bg-blue-950  hover:cursor-pointer" type="submit" value={"Submit"}/>                    
                </div> */}
            </form>
            
            <div className="w-[100%] bg-black h-[1px] my-3"></div>

            <form className="flex flex-col gap-2">
                <div className=" text-xl text-blue-800 font-semibold">Upload DB MetaData</div>

                <div className="flex justify-between">
                    <div className="flex gap-2 justify-start items-center">

                        <input onClick={autometadata} type="checkbox" id="autometadataCheck"/>
                        <label htmlFor="autometadataCheck">AutoMetadata</label>
                        
                        {
                            !autometadataChecked
                            ?
                            <input id="autometadata" type="file" className="border border-1 border-gray-300 p-1"/>
                            :
                            <div className="h-[2.45rem]"></div>

                        }
                    </div>

                    <button className="rounded p-[7px] text-white text-sm bg-blue-900 duration-300 ease-in-out hover:bg-blue-950  hover:cursor-pointer w-[12rem]">Submit</button>
                </div>

            </form>


            
        </div>
    )
}