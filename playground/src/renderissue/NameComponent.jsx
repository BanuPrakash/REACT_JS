import { Component } from "react"

export default class NameComponent extends Component {
    render() {
        console.log("Name Component Rendered")
        return <div>
           Name in Name Component : {this.props.name} <br />
        </div>
    }
}