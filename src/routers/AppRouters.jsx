import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import TodoList from "../components/TodoList/TodoList";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/todo-list" element={<TodoList/>}/>
    </Routes>
  );
};

export default AppRouters;
