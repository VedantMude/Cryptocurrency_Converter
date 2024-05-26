import React,{ useState } from "react";

function myapplic(){
    const [inputval,setinputval]=useState(0);
    const [ouputval,setoutputval]=useState(0);

    const handlechange=(event)=>{
        setinputval(event.target.value);
    }
    const submission=(event)=>{
        event.preventDefault();
        let output=0;
        if(inputval<50){
            output=3.50*inputval;
        }
        else if(inputal<100){
            output=3.50*inputval+(50-inputval)*4.50;

        }
        else if(inputal>150){
            output=3.50*inputval+(inputval)*4.50+(150-inputval)*5.50;
            
        }
        setoutputval(output);
        setinputval(0);



    }

    return(
        <>
        <div>
        <form onSubmit={submission}>
            <label>Enter the usage input in unit</label>
            <input type="text" 
            onChange={handlechange}
            value={inputval}
            />
            <button type="submit">
                Convert
            </button>
        </form>
        </div>
        <div>
            <p>Output :{ouputval}</p>
        </div>
        
        </>
    )

}
export default myapplic;