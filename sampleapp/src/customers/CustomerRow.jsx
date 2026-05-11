import { Component } from "react";

export default class CustomerRow extends Component{

    deleteRow(id) {
        console.log("Delete <CustomerRow /> ", id);
        this.props.delEvt(id);
    }

    render() {
        // destructuring
         let {id, firstName, lastName, gender, imageUrl} = this.props.customer
        return <div>
                    <img src={imageUrl} />
                    <br/>
                  {firstName} {lastName}
                  &nbsp;
                  <button type="button" onClick={() => this.deleteRow(id)}>Delete</button>
        </div>
    }
}