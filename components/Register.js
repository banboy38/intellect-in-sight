export default function Register(){

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

    return(
        <div className=" w-[60%] min-h-[70%] text-black bg-white p-[2rem] rounded-md shadow-xl ">
            
            <form className="flex flex-col gap-3">
                <div className=" text-2xl text-blue-800 font-semibold">Register new usecase</div>

                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div>
                            DB Name*
                        </div>
                        <input id="dbname" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="DB name" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Password*
                        </div>
                        <input id="password" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Password" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Host*
                        </div>
                        <input id="hostname" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Host" className="border border-gray-300 w-[100%]"/>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div>
                            Port*
                        </div>
                        <input id="port" onChange={(e)=>{focusOnDB(e)}} type="text" placeholder="Port" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Name
                        </div>
                        <input type="text" placeholder="Name" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Group
                        </div>
                        <input type="text" placeholder="Group" className="border border-gray-300 w-[100%]"/>
                    </div>                    
                </div>

                <div className="flex gap-2">
                    <div className="w-1/3 font-semibold">
                        <div>
                            URI
                        </div>
                        <input onChange={(e)=>{focusOnURI(e)}} id="uri" type="text" placeholder="Username" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Auth Type
                        </div>
                        <input type="text" placeholder="Auth Type" className="border border-gray-300 w-[100%]"/>
                    </div>

                    <div className="w-1/3 font-semibold">
                        <div>
                            Database
                        </div>
                        <input type="text" placeholder="Database" className="border border-gray-300 w-[100%]"/>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="font-semibold">
                        Server Type
                    </div>

                    <div className="flex flex-wrap gap-x-4 gap-y-2">

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="MySQL" value={"MySQL"}/>
                            <label htmlFor="MySQL">MySQL</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="MariaDB" value={"MariaDB"}/>
                            <label htmlFor="MariaDB">MariaDB</label>
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
                            <input type="radio" name="server" id="SQL Server" value={"SQL Server"}/>
                            <label htmlFor="SQL Server">SQL Server</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="Oracle" value={"Oracle"}/>
                            <label htmlFor="Oracle">Oracle</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="JDBC" value={"JDBC"}/>
                            <label htmlFor="JDBC">JDBC</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="DuckDB" value={"DuckDB"}/>
                            <label htmlFor="DuckDB">DuckDB</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="radio" name="server" id="ClickHouse" value={"ClickHouse"}/>
                            <label htmlFor="ClickHouse">ClickHouse</label>
                        </div>
                        {/* <input type="radio" name="JDBC" id="JDBC" value={"JDBC"}/>
                        <input type="radio" name="JDBC" id="JDBC" value={"JDBC"}/> */}
                    </div>
                </div>

                <div className="flex justify-between items-center w-[100%]">
                    <input onClick={(e)=>{e.preventDefault()}} className=" rounded p-[7px] text-sm text-white w-[12rem] bg-blue-900 duration-300 ease-in-out hover:bg-blue-950  hover:cursor-pointer" type="submit" value={"Submit"}/>

                    <div className="flex gap-2 justify-center items-center">
                        <div>
                            Auto-Metadata
                        </div>
                        <input className="w-[12rem] border border-gray-300 focus:border-black duration-300 ease-in-out p-1" type="file"/>
                    </div>
                    
                </div>
            </form> 
            
        </div>
    )
}