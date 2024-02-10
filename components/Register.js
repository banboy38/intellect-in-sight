export default function Register(){

    function focusOnURI(e){

        if(e.target.value){    
            document.getElementById("dbname").disabled = true
            document.getElementById("port").disabled = true
            document.getElementById("hostname").disabled = true
        }
        else{    
            document.getElementById("dbname").disabled = false
            document.getElementById("port").disabled = false
            document.getElementById("hostname").disabled = false
        }

    }

    function focusOnDB(e){

        if(e.target.value){
            document.getElementById("uri").disabled = true
        }
        else{
            document.getElementById("uri").disabled = false
        }

    }

    return(
        <div className=" w-[60%] min-h-[70%] text-black bg-white p-[2rem] rounded-md shadow-xl flex flex-col justify-center items-center ">
            <h6 className=" text-2xl font-semibold text-blue-800">Register New Usecase</h6>
            
            <form className="flex flex-col gap-2 px-[3rem] pt-[1rem] w-[100%]">
                
                {/* Username */}
                <input className="text-black border border-blue-800 focus:border-blue-500" id="username" type="text" name="username" placeholder="Username"/>
                {/* Description */}
                <input className="text-black border border-blue-800 focus:border-blue-500" id="description" type="text" name="description" placeholder="Description"/>
                
                {/* URI */}
                <input className="text-black border border-blue-800 focus:border-blue-500" id="uri" onChange={(e)=>{focusOnURI(e)}} type="text" name="uri" placeholder="URI"/>

                {/* DB Credentials */}
                <input className="text-black border border-blue-800 focus:border-blue-500" id="dbname" onChange={(e)=>{focusOnDB(e)}} type="text" name="dbname" placeholder="DB Name"/>
                <input className="text-black border border-blue-800 focus:border-blue-500" id="port" onChange={(e)=>{focusOnDB(e)}} type="text" name="port" placeholder="Port"/>
                <input className="text-black border border-blue-800 focus:border-blue-500" id="hostname" onChange={(e)=>{focusOnDB(e)}} type="text" name="hostname" placeholder="Host Name"/>

                {/* Submit Button */}
                <input className=" mt-3 rounded p-[7px] text-sm  duration-300 ease-in-out hover:bg-blue-950 bg-blue-800 text-white hover:cursor-pointer " type="submit" value={"Submit"}/>

            </form> 
            
        </div>
    )
}