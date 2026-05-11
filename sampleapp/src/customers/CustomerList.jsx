import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component{
    x = 100; // state w.r.t OOP but not for React
    y = 200; // state w.r.t OOP but not for React

    // for React class component, 
    // state should be mentioned within state member
    
    state = {
        // pristine/original data, never modified
        originalCustomers: [
                {
                    "id": 1,
                    "firstName": "Aarav",
                    "lastName": "Reddy",
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
                    "lastName": "Joshi",
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
                ],
        // data to be displayed in view
        customers: [
                {
                    "id": 1,
                    "firstName": "Aarav",
                    "lastName": "Reddy",
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
                    "lastName": "Joshi",
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

    deleteCustomer(id) {
        let custs = this.state.originalCustomers.filter(c => c.id !== id);

        // avoid below statement
        //  this.state.customers = custs; // state is modified, but no reconcilliation

        // below code not only updates state but
        // also triggers reconcilliation
        this.setState({
            customers: custs,
            originalCustomers: custs
        })
    }

    filterCustomers(txt) {
         let custs = this.state.originalCustomers
            .filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        //    let custs = this.state.originalCustomers
        //      .filter(c => c.gender.toLowerCase().indexOf(txt.toLowerCase()) == 0);
      
        this.setState({
            customers: custs
        });
    }

    render() {
        return <div>
            <Filter filterEvt={(txt) => this.filterCustomers(txt)}/>
            {
                this.state.customers.map(c => <CustomerRow key={c.id}
                    delEvt = {(id) => this.deleteCustomer(id)} 
                    customer={c} />)
            }
        </div>
    }
}