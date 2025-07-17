import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export const CardComponent = (props)=>{
    return (
        <>
              <Card className={props.card_className}>
              <CardHeader className={props.cardheader_className}>
                    {props.header}
                   <CardTitleManual className={props.title_className} title={props.title}></CardTitleManual> 
                </CardHeader>
                <CardContent className={props.content_className}> 
                    {props.content}
                    </CardContent>
            </Card>
        </>
    )
}


const CardTitleManual = (props) => {
    return (
        <CardTitle className={props.className}>{props.title}</CardTitle> 
    )
}