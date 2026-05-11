import { Component } from "react";
import { ProfileContext } from "./ProfileContextProvider";

export default class Third extends Component {
    render() {
        return <ProfileContext.Consumer>
            {
                value => <div>
                    Avatar : {value.avatar} <br />
                    Name : {value.name}
                </div>
            }
        </ProfileContext.Consumer>
    }
}