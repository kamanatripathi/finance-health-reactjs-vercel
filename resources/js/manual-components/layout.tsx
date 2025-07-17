import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar";
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
export function Layout() {
  return (
    <>
      <SidebarProvider >
        
        <AppSidebar />
    
      </SidebarProvider>
    </>

  );
}