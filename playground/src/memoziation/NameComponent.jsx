import { memo } from "react"

function NameComponent({name}) {
    console.log("Name Component Rendered")
    
    return (
          <div>
           Name in Name Component : {name} <br />
        </div>
    )
}

export default memo(NameComponent);