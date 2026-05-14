# REACT_JS
```
    Banu Prakash C
    Full Stack Architect, Corporate Trainer
    Co-founder: Lucida Technologies Pvt Ltd.,
    Email: banuprakashc@yahoo.co.in
    banuprakash.cr@gmail.com
    https://www.linkedin.com/in/banu-prakash-50416019/

    Repo: https://github.com/BanuPrakash/REACT_JS

    Softwares Required:
    1) Node.js 22+ LTS
    2) Chrome Web Browser   
    3) Visual Studio Code
```

Server Side Rendering: Web Server renders the pages like HTML/PDF based on resource and sends to the client.
* Servlet and JSP [ Java ]
* PHP
* ASP.NET
* ExpressJS

Pros:
1) SEO [different URLs we have different pages rendered]
2) Sometimes Faster
3) Lightweight clients [client just needs to parse HTML / PDF]

Cons:
1) Heavy payload
2) Tightly coupled clients [clients can't evolve] like Browsers

Client Side Rendering:  Web Servers are going to send different formats of representation of resource to client.
Resource: What is present on Server like database / files /images/ printer,...
representation: state of resource at a given point of time [ printer is on/off, spool]
formats: XML / JSON / CSV / RSS / ATOM,...

Pros:
1) Client and Server can evolve seperatelly [ Example: Netflix initaily gave Web Browser access, TV , Mobile]
2) Less payload: only JSON/XML travels between client and server, not the entire pages
3) Better user experience.

Cons:
1) not SEO
2) Client is Heavy [ we need applications on client side to render]

It's always good to have a mix of SSR and CSR.

------------------

How Client Side Rendering evolved [ Web application]:
1) Plain Vanilla JS
document.createElement("div")
document.querySelectorAll("div");
2) JQuery [ library]; simplified using DOM and API calls
$("<div/>");
$("div");

both of them needed us create DOM elements, remove, update with lots of statements.

3) Templates:
a) underscore
b) Handlebars
```
    Data:
    {
        "title": "iPhone 17",
        price: 98000.00
        description: ...
    }
    Template:

    <div class="card">
        <div class="cardHeader">
            {{title}}
        </div>
        <div class="body">
            {{description}}
        </div>
        <div class="footer">
            $ {{price}}
            <button type="button"> Add to Cart</button>
        </div>
    </div>

```
c) Mustache
d) Knockout

4) Backbone: Library based on MVC Architecture
Model: Data
View: Presentation
Controller: application flow / logic
Backbone gave Model and Controller support, for view we should pick any of the above templates

5) AngularJS: Framework - Complete solution MVC based architecture -- Google
Some glitches like Cyclic rendering issues were there. [ digest cycle], two-way binding
Model changes --> View Changes
view Changes --> Model data changes

6) Google started to re-work on this [ Angular ]

Meanwhile:
Facebook team:
1) XHP -- 2010 by Marcel Laverdet
XML in PHP
2) FaxJS - 2011
3) ReactJS -- 2012 [ presented it in JSConf]
4) ReactJS open source --> 2013
5) Khan Academy - Sophie Alpert 
https://www.youtube.com/watch?v=8pDqJVdNa44&t=4467s

React is just a View template library.

========================================

Building blocks of React:
1) JSX: JavaScript and XML and files are generally named as "jsx" or "tsx" extension
2) JSX --> Coverted to JS Object using babel + @babel/preset-react plugin
babel --> Transcompiler
@babel/preset-env: @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). 

```
let add = (x,y) => x + y;

converts to
function add(x,y) {
    return x + y
}

https://caniuse.com/
Polyfill:

Promise.resolve("Hello"); 

Polyfill:
import 'core-js/actual/promise';
Promise.resolve("Hello"); 


@babel/preset-react: JSX transpiles to JS object

https://github.com/chentsulin/awesome-react-renderer
```

3) React.createElement() core API to convert JSX to JS
4) Functional Component: functions which return JSX --> React.createElement() --> JS
5) Class Component: render() method should return JSX --> React.createElement() --> JS

==========

Functional Components : 99% of react components now a days
Class Components: rearly used.

====================

JS build tools:
```
1) Grunt
2) Gulp
3) Webpack:
Create React App (CRA) is a CLI tool formerly used to quickly set up a single-page React application with zero configuration
However, as of February 2025, the official React team has deprecated (sunsetted) Create React App.

npx create-react-app sampleapp

4) vite
Latest:
npm create vite@latest sampleapp

```

First Project:
```
npm create vite@latest sampleapp
Need to install the following packages:
create-vite@9.0.6
Ok to proceed? (y) 


> npx
> create-vite sampleapp

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◆  Install with npm and start now?
│  ● Yes / ○ No
└

```

vite server: small web server for development purpose only.

1) Config: vite.config.js
```
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    open: true
  }
})

```

2) vite will place src/main.jsx in index.html file

3) main.jsx renders App.jsx

============================

Folder structures:
```
    src
        products
            ProductList.jsx
            ProductCard.jsx
        customers
            CustomerList.jsx
            CustomerRow.jsx
            CustomerDetails.jsx
        orders  
            Orders.jsx
        common
            atoms [mostly 3rd party library]
            molecules [ mostly 3rd party library]

```

Atomic Design is a methodology for creating design systems by breaking user interfaces down into five distinct hierarchical levels, inspired by chemistry.
Atoms: Examples: Buttons, input fields, labels, icons, or color palettes.
Molecules: form field with a label, Card
Organisms: Collection of Molecules, list of Cards.
Templates: Mobile Template, Tv Template


3rd party libraries for atoms and molecules like: MUI, React bootstrap, kendoUI, Adobe web spectrum, prime react

=====

state and props.
OOP: Object will have state and behaviour,
Examples of state:
1) balance of my banking account
2) color of button
3) caption of button
4) name of employee

Examples of Behaviour:
1) credit() and debit()

```
map ==> transform
for each customer is customers create <CustomerRow />

```

props: mechanism of passing data from parent to child

In React, reconciliation is the internal process of updating the browser's DOM to match the most recent virtual representation of your UI. When a component's state or props change, React creates a new Virtual DOM tree and compares it with the previous one to determine exactly what changed

===========================

https://legacy.reactjs.org/docs/reconciliation.html

VDOM: Virtual DOM, possible future DOM

===========

state, props, event handling
How to organize components 

=====================================================
React class component lifecycle methods:
Mounting Phase
```
constructor() -> render() -> componentDidMount()
initialize --> show UI with init data --> MAKE api calls and update the state

Avoid making API calls in constructor --> leads to FCP issue
First Contentful Paint -- Core Web Vitals
```

Updating Phase:
```
    shouldComponentUpdate() --> false

    shouldComponentUpdate() -->  true --> render() --> componentDidUpdate() --> dependent API call

```

Unmounting Phase: componentWillUnmount() --> gets called before component is destroyed.
Any thing like unsubscribe should be done here

Example: componentDidMount() --> subscriripition for Stock Value update

=========================

React is a uni-directional data flow concept --> Flux architecture.
Any state changes, it triggers re-rendering of all it's children

```
npm create vite@latest

Ok to proceed? (y) 

│
◇  Project name:
│  playground
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
```

Prop drilling in React is the process of passing data (props) from a parent component down through multiple layers of nested child components until it reaches a deeply nested component that actually needs it.

React 16: introduced Context to avoid props-drill

Understanding children property:
```
A and B are children
    <Parent>
            <A />
            <B />
    </Parent>

D and E are children
    <Parent>
            <D />
            <E />
    </Parent>
```

Day 2:
* Functional components instead of Class components.
Why and How?
complete application using 3rd party atoms and molecules : ecom app
* react-router-dom
* axios for API calls
* Bootstrap : responsive web design
* Using React Context for State managment


=====

Day 2 Recap:
```
const list = createElement(
  'ul', 
  null, 
  createElement('li', null, 'Item 1'),
  createElement('li', null, 'Item 2')
);

Functional Component: returns JSX --> createElement --> JS Object --> renderer like react-dom/ react-tv, react-native

Class Component: render() method --> JSX --> createElement --> JS Object --> renderer like react-dom/ react-tv, react-native

Class Components extends Component [inherits]
life-cycle methods:
1) componentDidMount() called once when component is created and after constructor() and render()
2) componentDidUpdate() called whenever state or props change
3) componentWillUnmount() before component is destroyed: meant for releasing resources
4) render() -> returns JSX

Note: Class component state is assigned to a special member called "state"
setState() method to mutate the state and trigger reconcilliation
this.state.x = 100; // here state changes but will not be reflected in view 

map() method is used to transform
key : importance
props: way you pass members  [data and functions] to children components
```

Functional Components: After React 16.8 version, React team recommends using Functional Components instead of class component
```
Core Benefits
Simplicity and Readability: They use plain JavaScript functions, making them easier to read, write, and understand compared to the more verbose class syntax.

Hooks Support introduced in React 16.8 version: With the introduction of React Hooks, functional components can manage state (useState) and handle side effects (useEffect), which previously required class components.Performance: 

They are generally more lightweight because they avoid the overhead of creating class instances and managing complex lifecycle flows.

Ease of Testing: Since they are "pure" functions that transform props into UI, they are much easier to test and reason about in isolation.

No this Keyword: They eliminate the need for the this context, which often leads to bugs and confusion in JavaScript.

Method reference issues in Class Component:

Approach 1:
This triggers "this" is undefined, Context is lost
class SampleComponent extends Component {
    state = {
        "age": 18
    }
    doTask() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return <div>
            <button onClick={this.doTask} type="button"> Change </button>
        </div>
    }
}

Approach 2: Works
 render() {
        return <div>
            <button onClick={this.doTask.bind(this)} type="button"> Change </button>
        </div>
    }

Approach 3: 
class SampleComponent extends Component {
    constructor() {
        this.doTask = this.doTask.bind(this)
    }
    ...

      render() {
        return <div>
            <button onClick={this.doTask} type="button"> Change </button>
        </div>
    }

Approach 4:
class SampleComponent extends Component {
    state = {
        "age": 18
    }
    doTask() {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return <div>
            <button onClick={() => this.doTask()} type="button"> Change </button>
        </div>
    }
}
```

Why did we use class components until React 16.8 version?
1) state
2) componentLifeCycle methods

React Hooks are functions that allow you to use state and other React features like componentLifeCycle in functional components. 
Introduced in React 16.8, Hooks provide a way to manage state, side effects, and other logic without writing class components.

React Hooks: Partial list
1) useState
useState is a React Hook that lets you add a state variable to your component.
2) useEffect: simulate componentLifeCycle methods
```
    Empty dependency : componentDidMount looks like
    useEffect(() => {

    },[])

    Dependency : componentDidUpdate looks like
    gets called whenever age changes
    useEffect(() => {

    },[age])
     gets called whenever name changes
     useEffect(() => {

    },[name])

     gets called whenever name or age changes
     useEffect(() => {

    },[name, age])
```
3) useReducer
hook to be used instead of useState if:
a) state mutation is conditional
b) state mutation depends on previous state
c) state is complex

State looks like:
```
    shoping cart looks like below
    {
        cartItems: [
            {id: 5, "name": "A", qty: 2, "price": 100, "amount": 200}, 
            {id:6, "name":"X", qty: 1, price: 500, amount: 490}
         ],
         total: 800.00
         quantity: 2
    }

Action: Add to Cart:
get existing state, add new item ti cartItems, update total, update quantity

Action: INCREMENT
get existing cartItem, update :qty, update "amount", update "total"

Action "REMOVE"
get existing cartItems, remove cartItem, re-compute total, and quantity
```

TaskManager:
Actions: ADD TASK, REMOVE TASK, TOGGLE TASK [completed/ not completed]

Action Objects:
```
{
    type: "ADD_TASK",
    payload: "Learn ReactJS"
}

{
    "type":"TOGGLE_TASK",
    payload: 2
}
{
    type: "REMOVE_TASK",
    payload: 5
}

{
    type: "CLEAR_TASKS"
}

```
for useReducer we need reducer functions:
a reducer function is one which takes state and action, returns a new state, it's not a component


4) useContext
    hook to simplify Context Consumer
5) useRef

==============================================

Single Page Application: SPA one html but different URLs shows different components
Components Required:
1) NavbarComponent
2) ProductList
3) ProductCard
4) CartComp
5) CartRow
6) Details
7) Default [ wrong URL ]
8) ProductForm
...

Loading all components [ aprox 50-80] in even small application takes time and leads to FCP issue
Solution: load only required comp initally and load other components lazily only on requirement

Back and Prev buttons will navigate within that single html but different views
react-router-dom library:
1) different URLs has to render different components
http://amazon.com/mobiles
http://amazon.com/tvs
http://amazon.com/checkout
http://amazon.com/login

2) Lazy loading of components

ready-made atoms and molecules like button, navbar, card components from react-bootstrap.
Alternate: MUI / Adobe Web Spectrum / primeReact / KendoUI / SyncFusion ,...

3) axios for API calls instead of fetch 
Axios: Best for large projects, complex applications, or when needing automatic JSON parsing and interceptors. 

==================

```
REACT_JS % npm create vite@latest

◇  Project name:
│  ecomapp
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes

```

ecomapp> npm i bootstrap react-bootstrap react-router-dom axios

Following actions to be implemented and mutate the state
1) ADD_TO_CART
2) INCREMENT
3) DECREMENT
4) CLEAR_CART
5) REMOVE_FROM_CART

Payload: CartItem is Product + qty + amount
Makes case for using reducer function and useReducer

============

React Context: for sharing methods and state across application to avoid props drill


Checkout:
1) Place Order by making API call to the server
2) once order is saved to database
3) redirect to landing page


json-server: fake RESTful Web services

ecomapp> npx json-server --watch data.json --port 1234

===================================
Day 3: 
* TypeScript
* convert this ecomapp to typescript
* Controlled and Uncontrolled components
* Tanstack Query
* remaining few important hooks..
* Redux: Predicatable State Managment

Day 2 Recap:
* react-router-dom
- Component display based on URL, essential for SPA
- Lazy loading of components, required to solve FCP, Core Web Vital

* for atoms and molecules: ready to use components from 3rd party like MUI, react-boostrap, primereact,..

* bootstrap: RWD, CSS Framework
* axios: for making API calls instead of fetch
* using hooks: useState, useEffect, useReducer, reducer, context, useContext [ Context Consumer]
* json-server: FAKE RESTful WS

================

Day 3:
* memo:  same shouldComponentUpdate() of class component
Memoization is an optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. 

React.memo is a higher-order component (HOC) used to optimize performance by preventing unnecessary re-renders of functional components

Closure: returned function can access members of outer function

* Controlled and Uncontrolled components
```
Controlled Components
In a controlled component, the DOM value like input text value is controlled by React state.
 let [taskData, setTaskData] = useState();
 <input type="text" onChange={(evt) => setTaskData(evt.target.value)}/> 

Data Handling: React state holds the input value.

Updates: An onChange handler updates the state on every keystroke.

Pros: Predictable, allows real-time validation, good for search operations

Cons: Requires more code (state definition, handler functions)., more events to handle
Each time state changes re-rendering happens

Use Case: Form inputs requiring live validation, dynamic styling, or conditional logic (e.g., username/password forms). search operations

Uncontrolled Components:

Uncontrolled components allow the DOM to handle form data, similar to traditional HTML forms.Data Handling: 

The DOM stores the value internally.
Updates: Refs are used to pull the value from the DOM only when needed (e.g., on submit).

Pros: Requires less code, simple to integrate with non-React libraries, good for quick form submissions.
Cons: Harder to perform real-time validation or modify input data.

Use Case: Simple forms, or when you only need to read the value upon submission.

```

TypeScript:
```
Strongly typed programming language
JS is loosely typed and dynamically typed language.

var name = "Roger"; // string
name = 24; // allowed in JS but not in typescript

Key Benefits of TypeScript in ReactEarly Error Detection: 
TypeScript catches common bugs—like passing a string where a number is expected or accessing a property that doesn't exist—at compile time rather than during runtime.

var name = 20;
name.toUpperCase(); // runtime we get error in JS, whereas typescript compiler triggers error at compilation time

Superior Autocomplete (IntelliSense): When you use a component, your IDE will suggest exactly which props it requires and their expected shapes. 

This reduces the need to constantly check documentation.
Fearless Refactoring: Renaming a prop or changing a data structure is safer because TypeScript will instantly highlight every file that needs to be updated to match the change.

Clearer Component Contracts: By defining interfaces for your props and state, you create "live" documentation that tells other developers exactly how your component is intended to be used.
function addProduct(product:Product) {

}

```

TypeScript --> tsc --> JavaScript --> JS engine

Data types:
1) Basic types: string, boolean, number, enum
let name:string = "Roger";
let age:number = 24;

2) type type: to define shape of object
```
type Product = {
    id: number,
    title: string,
    price: number
}

let product: Product = {"id": 44, "title": "A", "price": 5343.11};

function addProduct(product:Product) {
    ..
}

addProduct({"id": 44, "title": "A", "price": 5343.11});
```

3) Union type: [similar to inheritance]

```
type Mobile = Product & {
    "connectivity": string,
    "camera": string
}
```

4) interface: similar to type can be used to define the shape of object
4.1) 
```
interface Product  {
    id: number,
    title: string,
    price: number
}
```
4.2) can be used for realization relationship
```
interface Renderer {
    render(): JSX;
}

class DomRenderer implements Renderer {
    ...
    render(): JSX {
        ...
    }
}

class TvRenderer implements Renderer {
    ...
    render(): JSX {
        ...
    }
}
```

TypeCasting aka TypeAssertion : we know more about the type than typescript

Task: Convert ecomapp to use typescript instead of JavaScript

```
npm create vite@latest

│
◇  Project name:
│  ecomts
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Install with npm and start now?
│  Yes
```
ecomts> npm i bootstrap react-bootstrap react-router-dom axios

====
Fetching data using fetch and axios.

Tanstack Query for fetching?
Powerful data-fetching and state management library for react, earlier it was called as react query.
Caching mechanism, refetching, Parallel queries, infininte scroll, ...

npm i @tanstack/react-query @tanstack/react-query-devtools

Assume I need to get Users with specific IDs:
[1,7,8,3]
n hits to Backend 1 at a time
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/users/7
https://jsonplaceholder.typicode.com/users/8
https://jsonplaceholder.typicode.com/users/3

====

Infinite Queries: infinite scroll
X, Facebook, instagram ,....

https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

https://jsonplaceholder.typicode.com/comments?_limit=3&_start=2


==============================================================

Tasks:
1) Multipage registration of Form
implement it with React Context and react-router-dom
```
state in context 

Context:
{
    loginData: {
        username: "",
        email : "",
        password : ""
    },
    personalData: {
        "dob" : "",
        "address" : ""
    },
    professionalData: {
        "education" : "",
        "skills" : ""
    }
}

a) http://localhost:3000
Form with login data
Next
b) http://localhost:3000/personal
Form for personal data
Next
Back
c) http://localhost:3000/professional
enter professional details 
Next
Back
d) http://localhost:3000/confirm
Back


2) Using Context create MCQ application

```
=========================

Redux: Predicatable State management 
NextJS: for SSR for react component

```
When to Use Context API

Simple Global Data: Use it for static or rarely changing data like Themes (dark/light mode), Current Language (i18n), or avatar and name.

Avoiding Prop Drilling: When your only goal is to avoid passing props through several layers of components.

Small to Medium Apps: Where the state logic is straightforward and doesn't require complex transformations.

Cons: whenever state changes, it triggers re-rendering

When to Use Redux

Large, Complex Apps: When multiple components across the app need to access and modify the same data (e.g., a shopping cart, complex dashboards, or feeds).

Frequent State Updates: If the state changes rapidly, Redux's selector-based subscriptions prevent massive, unnecessary re-renders.

Advanced Logic: When you need middleware for asynchronous side effects (like API calls) or consistent patterns for how state is updated

Redux: can be developed as seperate state management module, tested and can be integrated with different libraries and frameworks like Angular, react, Vue, JS, jQuery

Supports Time-travel debugging

Redux: Good for Microfrontend application for global state managment
```

Recap:
1) JSX, React.createElement(), react-dom
2) VDOM -- Reconcilliation -- DOM
3) functional components vs class components
4) Component Life cycle methods: componentDidMount, componentDidupdate, shouldComponentUpdate, componentWillUnmount
5) functional components:
Hooks introduced in React 16.8 which allowed to get whatever functionalites present in class component to functional components.
a) useState
b) useEffect
c) useReducer
d) useContext : Context Consumer
e) useRef: uncontrolled component
f) useParams
6) Context: to prevent props-drill; Provider, Consumer
7) react-router-dom; Suspense
8) TanStack Query: advance data fetching api; caching, parallel queries, infinite query [use it along with Intersection Observer]

===========

Day 4:
State Managment:
Context was never intended for State managment, was meant only to avoid props drill;
developers started to use it for state management which is good enough for small and medium sized applicaiton;
Issue is: every time state changes in Context, re-render happens, debugging is difficult

----

Facebook uses MVC architecture pattern
Facebook --> Flux Architecture to solve MVC issues
Flux Architecture pattern was made open source
1) Redux
2) Mobx
...

Legacy Redux: for understanding purpose
Redux Toolkit: right way to use Redux


1) Task Manager App with Redux : Legacy Redux
2) convert ecomts to use Redux : RTK toolkit

```
npm create vite@latest
Project name:
│  taskmanager-redux
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes


taskmanager-redux> npm i redux react-redux
```

Redux Toolkit: instead of Redux [ layer on top of Redux]
* use configureStore() instead of createStore()
* use createSlice, no need for writing reducer files seperately
* No need for connect, mapStateToProps, mapDispatchToProps
a) useSelector: The selector is approximately equivalent to the mapStateToProps argument to connect conceptually.
b) useDispatch: equivalent to the mapDispatchToProps argument to connect conceptually.

```
const initialState = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push[{id: new Data(), task: action.payload, completed: false}]
    },
    toggleTask: (state, action) => {
      state.map(task => task.id === action.payload ? 
                    {...task, completed: ! task.completed}: task)
    },
    clearTasks: (state) => {
      state = [];
    },
  },
})

```

Migrate Ecomts to use Redux tool kit instead of Context.

Steps:
1) npm create vite@latest
Name: ecomts-rtk
React
TypeScript

2) ecomts-rtk %  npm i @reduxjs/toolkit react-redux @tanstack/react-query @tanstack/react-query-devtools react-router-dom bootstrap react-bootstrap axios

3) Copy folders and files from ecomts to ecomts-rtk

4) Remove Context and reducers folders

5) remove all references of Context in the application
a) main.tsx
b) NavbarComp.tsx
c) ProductCard.tsx
d) CartComp.tsx
e) CartRow.tsx

=======

check redux folder, ProductCard, CartComp, NavbarComp, CartRow

In case of a scenario of using Redux for data fetching instead of TanStack Query, ..
We need to understand Redux async logic:

Redux is synchronous:
View --> dispatch action -> store -> state -> state is give to View


Pending --> fulfilled
pending --> rejected

Redux can be integrated with 3rd party middleware libraries like Thunk and Saga for 
async logic:

https://redux.js.org/tutorials/fundamentals/part-6-async-logic

Thunk: subrotine

reducers: handle actions sent by view - react
extraReducers: handling actions generated by middleware like thunk