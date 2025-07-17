import './bootstrap';
import React from "react";
import { createRoot } from 'react-dom/client';
import "../css/app.css";
import "../css/theme-component.scss";

import { AppSidebar } from './manual-components/sidebar/app-sidebar';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Layout } from './manual-components/Layout';
import { ThemeProvider } from './manual-components/theme-provider';
import { LoginForm } from './pages/login/login-view';
import MainLayout from './manual-components/layout/MainLayout';
// import { TamaguiProvider } from '@tamagui/core';
// import "../css/theme-component.scss";

const container = document.getElementById('app');

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
// import Mainlayout from "./main_layout";
// import { ToastMessageContainer } from "./components/ToastMessage";

root.render(
    <React.StrictMode> 
    

  <>
  <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
             {/* <Layout/> */}

             <div class="bg-muted ">

             <MainLayout />
  </div>
             
          </ThemeProvider>
  


  </>
  </React.StrictMode>,

  );



  



