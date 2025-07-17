import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'


const InputManual = (props) => {
    return (
        <>
           <Label>{props.label}</Label>
            <Input id={props.id} placeholder={props.placeholder} defaultValue= {props.defaultValue} />

        </>
    )
}

export default InputManual;