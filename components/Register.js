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
        <div className=" w-[50%] min-h-[70%] text-white bg-blue-800 p-[2rem] rounded-md shadow-xl">
            <h6 className=" text-xl font-semibold">Register New Usecase</h6>
            
            <form className="flex flex-col gap-2 px-[3rem] pt-[1rem]">
                
                <input className="text-black" id="username" type="text" name="username" placeholder="Username"/>
                <input className="text-black" id="description" type="text" name="description" placeholder="Description"/>
                
                <input className="text-black" id="uri" onChange={(e)=>{focusOnURI(e)}} type="text" name="uri" placeholder="URI"/>

                <input className="text-black" id="dbname" onChange={(e)=>{focusOnDB(e)}} type="text" name="dbname" placeholder="DB Name"/>
                <input className="text-black" id="port" onChange={(e)=>{focusOnDB(e)}} type="text" name="port" placeholder="Port"/>
                <input className="text-black" id="hostname" onChange={(e)=>{focusOnDB(e)}} type="text" name="hostname" placeholder="Host Name"/>

        
                <input className=" mt-3 rounded p-[5px] text-sm  duration-300 ease-in-out hover:bg-blue-950 bg-blue-900 hover:cursor-pointer" type="submit" value={"Submit"}/>

            </form> 
            
        </div>
    )
}