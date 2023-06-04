import React from "react";
import { useState } from "react";


function AddTransactionForm({addTransaction, newId}) {
  const [formData, setFormData] = useState({
    id: 0,
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  function handleChange(e){
    const name = e.target.name
    let value = e.target.value
    formData.id = newId + 1
    setFormData({...formData,[name]: value});
    
    
  }

  function handleSubmit(e){
    e.preventDefault();
    alert(`id is ${formData.id}, date is ${formData.date}, description is ${formData.description}, category is ${formData.category}, amount is ${formData.amount}`);
    addTransaction(formData);
    setFormData({
      id: 0,
    date: '',
    description: '',
    category: '',
    amount: ''
    })
    
    

    
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} required onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={formData.description} required onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} required onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} required onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
