import { useRef } from "react"

export default function UncontrolledComponent () {
    let emailRef = useRef(); // reference
    let ageRef = useRef();

    function dosubmit() {
        console.log(emailRef.current.value, ageRef.current.value);
    }
    
    return (
        <form>
           Email <input type="email" ref={emailRef}/> <br />
           Age <input type="number" ref={ageRef} /> <br />
           <button type="button" onClick={dosubmit}>Submit</button>
        </form>
    )
}