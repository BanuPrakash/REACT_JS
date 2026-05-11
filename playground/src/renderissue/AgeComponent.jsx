import { Component } from "react"

export default class AgeComponent extends Component {
    render() {
        console.log("Age Component Rendered")
        return <div>
           Age in Age Component : {this.props.age} <br />
        </div>
    }
}