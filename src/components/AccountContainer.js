import React from "react";
import { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionData, setTransactionData] = useState([]);
  const [query, setQuery] = useState("")
  const [newTransactionData, setNewTransactionData] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(res => res.json())
    .then(data => setTransactionData(data))
  },[]);
  
  function handleAddTransaction(formEntry){
    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEntry),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  
    setTransactionData([...transactionData,formEntry]); 
  }
  function handleSearch(string){
    setQuery(string);
    const results = transactionData.filter(transaction => {
      if (query !== ''){
        return transaction.description.toLowerCase().includes(query.toLowerCase());
      }
      else {
        return transactionData
      }
    })
    setNewTransactionData(results)
  }
 

  return (
    <div>
      <Search searchFtn={handleSearch} />
      <AddTransactionForm addTransaction={handleAddTransaction} newId={transactionData.length} />
      <TransactionsList transactions={query? newTransactionData: transactionData}/>
    </div>
  );
}

export default AccountContainer;
