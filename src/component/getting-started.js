import react from "react"
import { skinCode } from "../constants/typeCodes"
export default function GettingStarted(){
    return(
        <div className="  container med gettingStarted">          
        <div className="section">
         <h1 className="center">Select a resume template to get started </h1>
           <p className="center"> You’ll be able to edit and change this template later!</p>
            <br></br>
        
            <div  className="styleTemplate " >
                {skinCode.map((value , idx) => {
                    return (
                    <div key={idx} className="template-card rounded-border">
                         <img  className='' src={'/images/' + value + '.svg'}/>
                        <button type="button"  className='btn-select-theme'>USE TEMPLATE</button>
                    </div>
                 ) })}
            </div>
         </div>        
         </div>
    )
}