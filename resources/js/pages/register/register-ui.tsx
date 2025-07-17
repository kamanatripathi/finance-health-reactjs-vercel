import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import InputManual from '@/manual-components/input_manual/input';
import React from 'react'

const Register = (className,
    ...props) =>{ 
        const [currentInputIndex, setCurrentInputIndex] = React.useState(0);
        const [inputs, setInputs] = React.useState(['', '', '']); // Three input fields
        const handleInputChange = (e) => {
            const newInputs = [...inputs];
            newInputs[currentInputIndex] = e.target.value;
            setInputs(newInputs);
          };
        
          const handleNext = () => {
            if (currentInputIndex < inputs.length - 1) {
              setCurrentInputIndex(currentInputIndex + 1);
            } 
          };
        
        return (
            <>

 <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        
          <Card className="overflow-hidden">
              <CardContent className="grid p-0">
                <form className="p-6 md:p-8">
                  <CardHeader className="  text-center ">
                    <CardTitle className="  text-2xl font-bold">Register</CardTitle>
                    <CardDescription className="  text-muted-foreground">
                     Enter your email below to login to your account 
                    </CardDescription>
                  </CardHeader>
                  {currentInputIndex === 0 && (
                <InputManual label = "Name" id="name" placeholder="John Doe" />
                
                )}
               {currentInputIndex === 1 && (
                <InputManual label = "Email" id="email" placeholder="example@gmail.com" />
                )}
                {currentInputIndex === 2 && (
                <InputManual label = "Mobile" id="mobile"  />
                )}  
                
                {currentInputIndex === 3 && (
                <InputManual label = "OTP" id="otp"  />
                )}

                

   
                <Button onClick={handleNext}>
                  {currentInputIndex < inputs.length - 1 ? 'Next' : 'Submit'}
                </Button>
                
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
                
               </form>

             
             </CardContent>
           </Card>
    </div>
       </div> 
            </>
        )
}

export default Register;