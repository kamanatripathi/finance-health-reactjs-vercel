import React from "react";
import Sidebar_Layout from '../components/Sidebar';
// import HeaderContainer from "../containers/newcontainer/HeaderContainer";
// import AnonymousLayout from "./AnonymousLayout";
// import { UserType } from "../utilities/commonFunction";
// import { publicRoutePath, vendorRoutePathList } from "../Constants/service_const";
// import { localStorageUtils } from "../utilities/localStorage";
// import LoginContainer from "../containers/newcontainer/LoginContainer";
import { useNavigate } from "react-router-dom";
// import history from "../history";
import { Layout } from "../Layout";
import AppRouter from "@/router/routes";
// import { toast } from "react-toastify";



const MainLayout = () => {

    //  let currentType = localStorageUtils.getUserType();
    //  if (Number(currentType) !== UserType.Vendor) {
    //    toast.error("Unauthorized Access!");
          //  history.push(publicRoutePath.login);
    //  } 
     
    //  let truePath = false;
    //  for(const path of vendorRoutePathList){
    //    if (location.pathname.includes(path)) {
    //      truePath = true;
    //    }
    //  }
   
    //  if(!truePath){
    //    history.push(publicRoutePath.appEntryPoint);
    //  }

     return (
    <>
    {/* <HeaderContainer /> */}

    <AppRouter />
    </>    
  )
}

export default MainLayout;
