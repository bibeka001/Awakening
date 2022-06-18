import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";
const ExpenseItems = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          ${props.cost}
          <TiDelete size="1.5rem" onClick={handleDeleteExpense}></TiDelete>
        </span>
      </div>
    </li>
  );
};

export default ExpenseItems;
