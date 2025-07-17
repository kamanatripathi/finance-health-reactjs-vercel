import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardComponent } from '@/manual-components/card_manual/card'
import InputManual from '@/manual-components/input_manual/input'
import React from 'react'
export const ProfileCard = ()=>{
   
    return(
        <>
          <div class="flex flex-col justify-center items-center h-[100vh] ">
              <div class="mt-2 mb-8 w-full">

                <CardComponent 
                cardheader_className="space-y-1.5 px-2 text-xl font-bold text-navy-700 dark:text-white"
                content_className = "space-y-6"
                card_className = "items-center rounded-[20px]  w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3"
                header = {
                    <div className="pb-3 flex items-center space-x-8">
                    <img
                    src="/assets/placeholder.jpg"
                    alt="Avatar"
                    width="96"
                    height="96"
                    className="rounded-full"
                    style={{ aspectRatio: "96/96", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                    <h1 className="text-2xl font-bold">Meadow Richardson</h1>
                    <Button size="sm">Change photo</Button>
                    </div>
                    </div>
                }
                content= {
                    <>
                    <div className="space-y-2">
                    <InputManual label = "Name" id="name" placeholder="E.g. Jane Doe" defaultValue="Meadow Richardson" />
                    </div>
                    <div className="space-y-2">
                    <InputManual label = "Email" id="email" placeholder="E.g. jane@example.com" />
                    </div>
                    <div className="space-y-2">
                    <InputManual label = "Number" id="number" placeholder="9293948994" />
                    </div>
                    </>
                }
                >         
        </CardComponent>

              </div>

          </div>
  
            
        </>
    )
}