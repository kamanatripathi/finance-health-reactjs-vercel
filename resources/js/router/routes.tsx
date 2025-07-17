import { Routes, Route } from "react-router-dom";

import React from "react";
// import MainLayout from '../Layout/MainLayout';
// import NotFound from "../components/NotFound";
import history from "../history";

//
import { RecoverPwd } from "@/pages/recover-pwd/recoverpwd";
import { LoginForm } from "@/pages/login/login-view";
import { ChangePwd } from "@/pages/change-pwd/changepwd";
import HistoryRouter from './history-router';
import { Layout } from "@/manual-components/Layout";
import DashboardView from "@/pages/dashboard/dashboard-view";
import { ProfileCard } from "@/pages/profile/profile-view";
import Register from "@/pages/register/register-ui";
import { Transaction } from "@/pages/transaction/transaction";

const AppRouter = (props) => {

  const private_routes = [
    //
    {route_name: "changepwd" , path: "/change-password" , element_name: ChangePwd,isPublic: false},
    {route_name:"profile" , path: "/profile" , element_name: ProfileCard, isPublic: false},
    {route_name:"home" , path: "/home" , element_name: DashboardView, isPublic: false},   
    {route_name:"transaction" , path: "/transaction" , element_name: Transaction, isPublic: false},   

    
  ]
  
  const public_routes = [
    {route_name:"forgot-password" , path: "/forgot-password" , element_name: RecoverPwd,isPublic: true},
    {route_name:"login" , path: "/" , element_name: LoginForm, isPublic: true},
    // {route_name:"login" , path: "/" , element_name: ProfileCard, isPublic: true},
    {route_name:"login" , path: "/login" , element_name: LoginForm, isPublic: true},
    {route_name:"register" , path: "/register" , element_name: Register, isPublic: true},

  ]

  return (
    <HistoryRouter history={history}>
        <Routes>
          {public_routes.map((routing) => {
                  return (
                    <Route key={routing.route_name} element={<routing.element_name />} path={routing.path} />
                 )
            })}


            <Route element={<Layout />}>
                  {private_routes.map((routing) => {
                      return (
                        <Route key={routing.route_name} element={<routing.element_name />} path={routing.path} />
                      )
                  })}
              </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              {/* <NotFound/> */}
            </main>
          }
        />
      </Routes>
 </HistoryRouter>
  );
};

export default AppRouter;
