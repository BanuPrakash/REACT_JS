import { memo } from "react"

function AgeComponent({age}) {
        console.log("Age Component Rendered")
        return <div>
           Age in Age Component : {age} <br />
        </div>
    
}

// memoize prev props [cache]
// if new props are same as prev props [ return;]
// if prev props and new props are different [ return AgeComponent(props)]
export default memo(AgeComponent);