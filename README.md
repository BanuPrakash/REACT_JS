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


