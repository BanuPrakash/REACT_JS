import { Component } from "react";

export default class CustomerRow extends Component{
    render() {
        // destructuring
         let {id, firstName, lastName, gender, imageUrl} = this.props.customer
        return <div>
           <img src={imageUrl} />
           <br/>
           {firstName} {lastName}
        </div>
    }
}