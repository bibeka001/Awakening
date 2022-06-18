import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const totalEXpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalEXpenses}</span>
    </div>
  );
};
export default ExpenseTotal;
