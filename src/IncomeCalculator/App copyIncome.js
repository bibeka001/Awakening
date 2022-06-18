// import { useState, useEffect } from "react";
// import React from "react";
// import Header from "./Header";
// import IncomeForm from "./IncomeForm";
// import "./IncomeCalculator/IncomeForm.css";
// import IncomeList from "./IncomeList";
// const App = () => {
//   const [income, setIncome] = useState([]);
//   const [totalIncome, setTotalIncome] = useState(0);
//   useEffect(() => {
//     let temp = 0;
//     for (let i = 0; i < income.length; i++) {
//       temp += parseInt(income[i].price);
//     }
//   }, [income]);

//   return (
//     <div className="app">
//       <Header totalIncome={totalIncome} />
//       <IncomeForm income={income} setIncome={setIncome} />
//       {/* {(income.length > 0) ?  income[0].desc : ''} */}
//       <IncomeList income = {income} setIncome= {setIncome} />
//     </div>
//   );
// };

// export default App;




