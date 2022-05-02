import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
    // const [state, setTitle] = useState({ ...props });
    // function changeNewTitle() {
    //     setTitle((prevState) => {
    //         return {
    //             ...prevState,
    //             title: "New Title",
    //             amount: 111,
    //         };
    //     });
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div onClick={""} className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={""}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
