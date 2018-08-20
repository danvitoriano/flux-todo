import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import TodoActions from "./data/TodoActions";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppContainer />, document.getElementById("todoapp"));
registerServiceWorker();

// We will remove these lines later:

TodoActions.addTodo("My first task");
TodoActions.addTodo("Another task");
TodoActions.addTodo("Finish this tutorial");
