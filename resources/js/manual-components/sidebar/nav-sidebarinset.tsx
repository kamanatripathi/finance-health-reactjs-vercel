import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import { Bell } from 'lucide-react';
import React from 'react'

const HeaderInsetManual = () => {

    return(

        <>
          <div className="flex items-center justify-between px-3">
            <SidebarTrigger />
            <div className="ml-2">
                    <Bell></Bell>
            </div>
        </div>

</>
    )
}

export default HeaderInsetManual;