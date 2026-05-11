import { Component } from "react";
import CustomerRow from "./CustomerRow";

export default class CustomerList extends Component{
    x = 100; // state w.r.t OOP but not for React
    y = 200; // state w.r.t OOP but not for React

    // for React class component, 
    // state should be mentioned within state member
    
    state = {
        customers: [
                {
                    "id": 1,
                    "firstName": "Aarav",
                    "lastName": "Sharma",
                    "gender": "Male",
                    "imageUrl": "https://randomuser.me/api/portraits/men/1.jpg"
                },
                {
                    "id": 2,
                    "firstName": "Priya",
                    "lastName": "Reddy",
                    "gender": "Female",
                    "imageUrl": "https://randomuser.me/api/portraits/women/2.jpg"
                },
                {
                    "id": 3,
                    "firstName": "Rahul",
                    "lastName": "Verma",
                    "gender": "Male",
                    "imageUrl": "https://randomuser.me/api/portraits/men/3.jpg"
                },
                {
                    "id": 4,
                    "firstName": "Sneha",
                    "lastName": "Patel",
                    "gender": "Female",
                    "imageUrl": "https://randomuser.me/api/portraits/women/4.jpg"
                },
                {
                    "id": 5,
                    "firstName": "Kiran",
                    "lastName": "Nair",
                    "gender": "Male",
                    "imageUrl": "https://randomuser.me/api/portraits/men/5.jpg"
                },
                {
                    "id": 6,
                    "firstName": "Ananya",
                    "lastName": "Iyer",
                    "gender": "Female",
                    "imageUrl": "https://randomuser.me/api/portraits/women/6.jpg"
                },
                {
                    "id": 7,
                    "firstName": "Vikram",
                    "lastName": "Kulkarni",
                    "gender": "Male",
                    "imageUrl": "https://randomuser.me/api/portraits/men/7.jpg"
                },
                {
                    "id": 8,
                    "firstName": "Meera",
                    "lastName": "Joshi",
                    "gender": "Female",
                    "imageUrl": "https://randomuser.me/api/portraits/women/8.jpg"
                }
                ]
    }

    render() {
        return <div>
            <h1>Customer List!!!</h1>
            {
                this.state.customers.map(c => <CustomerRow customer={c} />)
            }
        </div>
    }
}