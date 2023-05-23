import React from "react";
import LoginForm from "./Form";
import TodoList from "./TodoList";
import UserList from "./FetchAPI";

const App = () => {
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <LoginForm />
      </div>

      <div>
      <h1>Todo App</h1>
      <TodoList />
      </div>

    
      <div>
      <UserList />
    </div>

    </>
  )};

export default App;