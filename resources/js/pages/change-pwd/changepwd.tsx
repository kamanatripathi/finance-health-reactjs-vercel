import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CardComponent } from '@/manual-components/card_manual/card';

export const ChangePwd = () => {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center gap-12 bg-muted p-12 md:p-10">

    <div className="flex w-full max-w-xl flex-col gap-6">

    <CardComponent 
    header={
      <>
      <CardTitle className="text-2xl">Change Password</CardTitle>
        <div>For your security, please do not share your password with others.</div>
      </>
    }

    title = {"Change Password"}
    title_className={"text-2xle1"}

    >

    </CardComponent>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Change Password</CardTitle>

              <div>For your security, please do not share your password with others.</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input type="password" id="current-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input type="password" id="new-password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input type="password" id="confirm-password" />
              </div>
              <div className="pt-6">
                <Button>Save</Button>
              </div>
            </CardContent>

          </Card>
        </div>
      </div>
    </>
  )
}