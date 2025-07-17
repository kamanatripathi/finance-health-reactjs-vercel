import * as Yup from "yup" // Import Yup directly


export const transactionSchema = Yup.object().shape({
    amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
    date: Yup.date()
        .required("Date is required")
        .nullable() // Allow null for initial state
        .max(new Date(), "Date cannot be in the future"),
    description: Yup.string()
        .max(500, "Description too long (max 500 characters)")
        .optional(),
    category: Yup.string()
        .required("Category is required"),
});

export type TransactionFormValues = Yup.InferType<typeof transactionSchema>;

// Define props for AddTransaction (e.g., if it needs to close the drawer)
export interface AddTransactionProps {
    onClose?: () => void;
}

export const initialValues: TransactionFormValues = {
    amount: undefined, // Or 0
    date: new Date(), // Set default to today, or undefined/null
    description: "",
    category: "",
};