import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2022");
    // const [expenses, setExpenses] = useState(props.expenses);
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        // setExpenses(
        //     props.expenses.filter((expense) => {
        //         return expense.date.getFullYear() === parseInt(year);
        //     })
        // );
    };
    const filteredYear = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(selectedYear);
    });
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                <ExpensesChart expenses={filteredYear} />
                <ExpensesList items={filteredYear} />
            </Card>
        </div>
    );
}
export default Expenses;
