import React, { useContext } from "react";
import ExpenseItems from "./ExpenseItems";
import { AppContext } from "../Context/AppContext";
const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   {
  //     id: 1,
  //     name: "Shopping",
  //     cost: 500,
  //   },
  //   {
  //     id: 2,
  //     name: "Holiday",
  //     cost: 1000,
  //   },
  //   // {
  //   //   id: 3,
  //   //   name: "Movie",
  //   //   cost: 250,
  //   // },
  //   // {
  //   //   id: 4,
  //   //   name: "Grocessary",
  //   //   cost: 300,
  //   // },
  //   // {
  //   //   id: 5,
  //   //   name: "Car Repair",
  //   //   cost: 400,
  //   // },
  // ];
  return (
    <div>
      <ul className="list-group">
        {expenses.map((expnd, index) => (
          <ExpenseItems id={expnd.id} name={expnd.name} cost={expnd.cost} />
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
