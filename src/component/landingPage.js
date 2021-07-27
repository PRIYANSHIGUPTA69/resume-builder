import react from "react"
import resume from "../static/resume.png"
import { NavLink } from "react-router-dom"
export default function LandingPage(){
    return(
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
                <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
                </NavLink>
                
                </div>
                <img src={resume}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    )
}