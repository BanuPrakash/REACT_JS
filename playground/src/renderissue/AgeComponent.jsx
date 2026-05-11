import { Component } from "react"

export default class AgeComponent extends Component {
     shouldComponentUpdate(nextProps, nextState) {
        if (this.props.age === nextProps.age) {
            return false
        }
        return true
    }
    render() {
        console.log("Age Component Rendered")
        return <div>
           Age in Age Component : {this.props.age} <br />
        </div>
    }
}