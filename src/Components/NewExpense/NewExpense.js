import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startFormHandler = () => {
        setIsEditing(true);
    };
    const stopFormHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startFormHandler}>Add Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onStartEditing={stopFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
