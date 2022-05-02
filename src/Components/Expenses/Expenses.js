import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2019");
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedYear}
                onChangeYear={yearChangeHandler}
            />
            <ExpenseItem {...props.expenses[0]} />
            <ExpenseItem {...props.expenses[1]} />
            <ExpenseItem {...props.expenses[2]} />
            <ExpenseItem {...props.expenses[3]} />
        </Card>
    );
}
export default Expenses;
