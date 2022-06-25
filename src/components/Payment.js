import React, {useState} from "react";

function Payment({payment, deletePayment}) {
  const [editingPayment, setEditingPayment] = useState(false)
  const [newPaymentData, setNewPaymentData] = useState({})

  const handleEdit = () => {
    setNewPaymentData(payment)
    setEditingPayment(!editingPayment)
  }

  function handleChange(event) {
    if(event.target.name === "amount"){
      setNewPaymentData({
        ...newPaymentData,
          amount: parseFloat(event.target.value)
      }) 
    }
      else {
        setNewPaymentData({ 
          ...newPaymentData, 
          [event.target.name]: event.target.value 
        });
      }
      console.log(newPaymentData)
  }

  function handleUpdate(){
    fetch(`http://localhost:9292/payments/${payment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPaymentData),
    })
      .then((r) => r.json())
      .then(data => console.log(data))
  }

  const handleDelete = () => {
    fetch(`http://localhost:9292/payments/${payment.id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        deletePayment(data)
      })
  }
  return (
    <div>
      {!editingPayment ? 
    <tr>
      <td>${parseFloat(payment.amount).toFixed(2)}</td>
      <td>{payment.date_paid}</td>
      <td>{payment.description}</td>
      <td>{payment.isNeed? "Needed" : "Wanted"}</td>
      <td>{payment.store.name}</td>
      <td>{payment.category.category_type}</td>
      <td> <button type="button" className="btn btn-primary" onClick={ handleEdit }>
        Edit Payment
      </button>
      </td>
      <td> <button type="button" className="btn btn-primary" onClick={ handleDelete }>
        Remove Payment
      </button>
      </td>
    </tr>
  :
    
  <tr>
      <td>
        <input type="text" name="amount" value={newPaymentData.amount} onChange={handleChange}/>
      </td>
      <td>
        <input type="text" name="date_paid" value={newPaymentData.date_paid} onChange={handleChange}/>
      </td>
      <td>
        <input type="text" name="description" value={newPaymentData.description} onChange={handleChange}/>
      </td>
      <td>
        {newPaymentData.isNeed}
      </td>
      <td>{newPaymentData.store.name}</td>
      <td>{newPaymentData.category.category_type}</td>
      <td> 
      {!editingPayment ? 
        <button type="button" className="btn btn-primary" onClick={ handleEdit }>
          Edit Payment
        </button> 
      : 
        <button type="button" className="btn btn-primary" onClick={ handleUpdate }>
          Update
        </button>
      }
      
      </td>
      <td> <button type="button" className="btn btn-primary" onClick={ handleDelete }>
        Remove Payment
      </button>
      </td>
    </tr> 

}
    </div>
  );
}

export default Payment;