import { faker } from "@faker-js/faker"
import { Component } from "react"
import NameComponent from "./NameComponent"
import AgeComponent from "./AgeComponent"

export default class ParentComponent extends Component {
    state = {
        name: "Roger",
        age : 18
    }

    changeName() {
        this.setState( {
            name: faker.person.firstName()
        })
    }

    changeAge() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        console.log("Parent Component Rendered")
        return <div>
            Name: {this.state.name} <br />
            Age: {this.state.age} <br />

            <button type="button" onClick={() => this.changeName()}>Change Name</button>
            <button type="button" onClick={()=> this.changeAge()}>Change Age</button>
            <hr />
            <NameComponent name={this.state.name} /> 
            <AgeComponent age={this.state.age} />
        </div>
    }
}