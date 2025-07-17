import React, { useState } from 'react'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import InputManual from '@/manual-components/input_manual/input';
import { DatePicker } from '@/manual-components/input_manual/date';
import * as Yup from "yup" // Import Yup directly
import { Formik, Form  } from "formik" // Import Formik and FormikForm
import { format } from 'date-fns';
import { SelectApp } from '@/manual-components/select/app-select';
import { toast } from 'sonner';
import { Dialog } from '@radix-ui/react-dialog';
import { AddTransactionProps, initialValues, TransactionFormValues, transactionSchema } from './transaction_validation';

    export default function AddTransaction({ onClose }: AddTransactionProps) {

    const [anotherDate, setAnotherDate] = React.useState<Date | undefined>(new Date())
    const [category, setCategory] = useState<string | undefined>("mumbai"); // Example with a default value


    const cityOptions = [
        { value: "grocery", label: "Grocery" },
        { value: "entertainment", label: "Entertainment" },
        { value: "rent", label: "Rent" },
        { value: "transportation", label: "Transportation" },
    ];
    const handleCityChange = (value: string) => {
        setCategory(value);
        toast.info(`Selected category: ${value}`);
    };
   
    const onSubmit = (values: TransactionFormValues) => {
        // console.log(values,"values");
        console.log("Form submitted:", values);
        toast.success("Transaction added successfully!", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        });
        // Call onClose if provided, to close the drawer/dialog
        if (onClose) {
            onClose();
        }
    };

    return (


        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-10">
            <h2 className="font-bold text-xl pb-10">Add Transaction</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={transactionSchema}
                // onSubmit={onSubmit} // Directly pass the onSubmit function
                enableReinitialize={true} // Useful if initial values might change from props
            >
                {({ values, errors, touched, setFieldValue, setFieldTouched, handleSubmit }) => (
                    <Form   >

      
                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <InputManual label="Amount" id="amount" placeholder="Amount"></InputManual>
                        </div>

                        <div className="space-y-2">
                            <Label>Date:</Label>
                            <div className="space-y-2">

                                <DatePicker
                                    selectedDate={values.date}
                                    onDateSelect={(date: Date | undefined) => {
                                        setFieldValue("date", date);
                                        setFieldTouched("date", true);
                                    }}
                                    placeholder="Event date"
                                    className="w-full p-3 "
                                    maxDate={new Date()}
                                />

                            </div>
                        </div>

                        <div className="space-y-2">
                        <Label>Description:</Label>

                            <Textarea
                                id="about"
                                placeholder="Write a few sentences about yourself"
                            />
                        </div>
                        <div className="space-y-2">
                        <Label>Category:</Label>
                            <SelectApp
                                label="Category"
                                options={cityOptions}
                                onValueChange={handleCityChange}
                                defaultValue={category} // Provide an initial default value
                                className="w-full"
                            />

                        </div>
                    </div>



                    <div className="flex justify-between">
                    <Button type="button" variant='outline' onClick={onClose}>Cancel</Button>
                     <Button type="submit" onClick={()=>onSubmit(values)}>Save Changes</Button>

                    </div>
                </div>
            </Form>
                            )}

            </Formik>

        </div>

    );
}
