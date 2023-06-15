import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/Pages/Dashboard";
import Tables from "../../components/Pages/Tables";
import Billing from "../../components/Pages/Billing";
import Profile from "../../components/Pages/Profile";
import Singin from "../../components/Pages/Singin";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
      <Route path="/billing" element={<Billing />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/singin" element={<Singin />}></Route>
    </Routes>
  );
};

export default AppRouters;
