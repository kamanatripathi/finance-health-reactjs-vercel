import React from 'react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import history from '@/history'
export function RecoverPwd({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const  backtoLogin = () => {
    history.push("/"); 
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">

    <div className="flex w-full max-w-sm flex-col gap-6">

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email so that we can send you password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  // required
                />
              </div>
            
              <Button type="submit" className="w-full">
                Send Email
              </Button>
              <Button variant="outline" className="w-full" onClick={()=>backtoLogin()}> 
                Back to Login
              </Button>
            </div>
        
          </form>
        </CardContent>
      </Card>
    </div>
    </div></div>
  )
}
