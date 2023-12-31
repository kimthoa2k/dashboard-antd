import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Tables from "../Pages/Tables";
import Billing from "../Pages/Billing";
import Profile from "../Pages/Profile";
import Singin from "../Pages/Singin";
import { ApiProvider } from "../Pages/Tables/ApiContext";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route
        path="/tables"
        element={
          <ApiProvider>
            <Tables />
          </ApiProvider>
        }
      ></Route>
      <Route path="/billing" element={<Billing />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/singin" element={<Singin />}></Route>
    </Routes>
  );
};

export default AppRouters;
