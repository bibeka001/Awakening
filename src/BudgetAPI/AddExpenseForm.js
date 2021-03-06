import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";
const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="from-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="">Cost</label>
          <input
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
