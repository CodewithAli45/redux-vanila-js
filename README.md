# redux-vanila-js
Redux - It is state mangement tools which manages the state of web application. Redux can be used in any UI framework such Reactjs, Vuejs, Angular, vanila js etc.

Redux is based on the principle of centralized store mangement system which helps in managing the state in predictable and maintainable ways.
The core concept of Redux are:
1. Store: A store is centralized java script object which holds the state of web application.
2. Action: Action is plain javascript object which defines the events on which the state of store can change. It is the only way to pass information to store.
3. Reducer: Reducer is like manager to company, it takes state and action as an input and return the updated state.
4. Subscribe: The subscribe will notify the subscribed component that any changes happened to store.

when you console the store following function will get:
store.getState() -> to get the state of store manually.
store.subscribe() -> to get notified everytime when state of store changes

Middlewares: It is a special function which acts between requests and resolve, it means when someone make a request to fetch data or delte data, before resolving the action, this middleware can perform security check such as where the request triggered by person is admin or not.

Logger middleware -> A logger middleware provide information of store in detailed way

The basic understanind and use of Redux in vanila js.
