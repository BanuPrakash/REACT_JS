import { th } from "@faker-js/faker";
import { Component, createContext } from "react";

export const ProfileContext = createContext();



export default class ProfileContextProvider extends Component {
    // can be after Login
    state = {
        "avatar": "banu.png",
        "name": "Banu Prakash"
    }

    render() {
        return <ProfileContext.Provider value={{...this.state}}>
            {this.props.children}
        </ProfileContext.Provider>
    }
}