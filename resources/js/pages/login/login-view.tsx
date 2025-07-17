import React from 'react'

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import history from "../../history";
import { CardComponent } from '@/manual-components/card_manual/card'
import { Button } from '@/components/ui/button'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const handleButtonClick = () => {
    history.push("/home");

  }
  const forgotpassword = () => {
    history.push("/forgot-password");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
     
          <Card className="overflow-hidden">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form className="p-6 md:p-8">
                  <CardHeader className="  text-center ">
                    <CardTitle className="  text-2xl font-bold">Login d</CardTitle>
                    <CardDescription className="  text-muted-foreground">
                      Enter your email below to login to your account
                    

                    </CardDescription>
                    
                  </CardHeader>
                 <div className="flex flex-col gap-6">
                   <div className="grid gap-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                       id="email"
                       type="email"
                       placeholder="m@example.com"
                       required
                     />
                   </div>
                   <div className="grid gap-2">
                     <div className="flex items-center">
                       <Label htmlFor="password">Password</Label>
                       <a onClick={() => { forgotpassword() }}
                         className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                       >
                         Forgot your password?
                       </a>
                     </div>
                     <Input id="password" type="password" required />
                   </div>
                   <Button type="submit" className="w-full" onClick={handleButtonClick}>
                     Login
                   </Button>
                 </div>
                 <div className="mt-4 text-center text-sm">
                   Don&apos;t have an account?{" "}
                   <a href="/register" className="underline underline-offset-4">
                     Sign up
                   </a>
                 </div>
               </form>

               <div className="relative hidden bg-muted md:block">
                 <img
                   src="assets/placeholder.jpg"
                   alt="Image"
                   className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                 />
               </div>
             </CardContent>
           </Card>
         </div>
    </div>
       </div> 
    )
}
