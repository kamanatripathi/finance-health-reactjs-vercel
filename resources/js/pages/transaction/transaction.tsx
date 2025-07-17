import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransactionList from './transaction-list'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AddTransaction from './add_transaction'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { DialogCloseButton } from './dialog'


export const Transaction = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const addTxn = () => {
        setIsDialogOpen(true);
    }
    const [open, setOpen] = React.useState(false)
    
    return (
        <>
         
            <div className="w-full max-w-4xl mx-auto p-6">
                
        <div className="flex justify-between">
            <h1 className=" font-bold text-xl pb-4">Transactions</h1>
            <DialogCloseButton title="Add Transaction" content= {<AddTransaction/>}/>
        </div>
        <div className="pb-4">
        <Input type="search" placeholder="Search" />
        </div>
      <div className="space-y-4">

        <Tabs defaultValue="all" >
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="expenses">Expenses</TabsTrigger>
    <TabsTrigger value="income">Income</TabsTrigger>

  </TabsList>
    <TabsContent value="all"><TransactionList></TransactionList></TabsContent>
    <TabsContent value="expenses">Make changes to your account here.</TabsContent>
    <TabsContent value="income">Change your password here.</TabsContent>
    </Tabs>
    </div>
    </div>
    
           

        </>
    )

}