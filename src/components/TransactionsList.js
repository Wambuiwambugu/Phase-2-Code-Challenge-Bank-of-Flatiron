import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
  const tableData = transactions.map((transaction) => {
    return <Transaction key={transaction.id} data={transaction} />
  })

  return (
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
  );
}

export default TransactionsList;
