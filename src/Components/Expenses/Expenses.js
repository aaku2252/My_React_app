import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem {...props.expenses[0]} />
            <ExpenseItem {...props.expenses[1]} />
            <ExpenseItem {...props.expenses[2]} />
            <ExpenseItem {...props.expenses[3]} />
        </Card>
    );
}
export default Expenses;
