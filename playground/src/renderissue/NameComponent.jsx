import { Component } from "react"

export default class NameComponent extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name === nextProps.name) {
            return false
        }
        return true
    }
    
    render() {
        console.log("Name Component Rendered")
        return <div>
           Name in Name Component : {this.props.name} <br />
        </div>
    }
}