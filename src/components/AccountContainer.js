import React from "react";
import { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionData, setTransactionData] = useState([]);
  const [newTransaction, setNewTransaction] = useState({})

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(res => res.json())
    .then(data => setTransactionData(data))
  },[]);
  
  function handleAddTransaction(formEntry){
    setNewTransaction(formEntry);
    setTransactionData([...transactionData,newTransaction])
   
    
  }

  return (
    <div>
      <Search />
      <AddTransactionForm addTransaction={handleAddTransaction} newId={transactionData.length} />
      <TransactionsList transactions={transactionData}/>
    </div>
  );
}

export default AccountContainer;
