import React from "react";
import Transaction from "./Transaction";
import { useState } from "react";


function TransactionsList({transactions}) {
  const[sortParams, setSortParams] = useState("all")
  
  
  function handleChange(e){
    console.log(e.target.value);
    setSortParams(e.target.value)
    console.log(sortParams)
  }
  const sortedTransactions = [...transactions].sort((a,b) => {
    if (sortParams === "all"){
      return true;
    }
    else if (sortParams === "description"){
      return a.description.toLowerCase().localeCompare(b.description.toLowerCase())
    }
    else if (sortParams === "category"){
      return a.category.toLowerCase().localeCompare(b.category.toLowerCase())
    }
    return sortedTransactions
  })
  

  

  const tableData = sortedTransactions.map((transaction) => {
    return <Transaction key={transaction.id} data={transaction} />
  })

  return (
    <div>
      <label>Sort</label>
      <br></br>
    <select value={sortParams} onChange={handleChange}  >
      <option value="all">Unsorted</option>
      <option value="description">Description</option>
      <option value="category">Category</option>
    </select>
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {tableData}
      </tbody>
    </table>
    </div>
  );
}

export default TransactionsList;
