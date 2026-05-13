import { faker } from "@faker-js/faker"
import { useState } from "react"
import NameComponent from "./NameComponent"
import AgeComponent from "./AgeComponent"

export default function ParentComponent() { 
    console.log("Parent Component Rendered")
    let [name, setName] = useState("Roger");
    let [age, setAge] = useState(18);        
    return <div>
            Name: {name} <br />
            Age: {age} <br />

            <button type="button" onClick={() => setName(faker.person.firstName())}>Change Name</button>
            <button type="button" onClick={()=>  setAge(age + 1)}>Change Age</button>
            <hr />
            <NameComponent name={name} /> 
            <AgeComponent age={age} />
        </div>
    }
