import React, {useState, useEffect} from "react";

function Payment({payment, deletePayment, onSuccessfulEdit}) {
  const [editingPayment, setEditingPayment] = useState(false)
  const [newPaymentData, setNewPaymentData] = useState({
      amount: "",
      date_paid: "",
      description: "",
      is_need: "",
      store_id: null,
      category_id: null,
  })


  const handleEdit = () => {
    setNewPaymentData({
      amount: payment.amount,
      date_paid: payment.date_paid,
      description: payment.description,
      is_need: payment.is_need,
      store_id: payment.store_id,
      category_id: payment.category_id,
    })
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
  }

  function handleUpdate(e){
    e.preventDefault();
    fetch(`http://localhost:9292/payments/${payment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPaymentData)
    })
      .then((r) => r.json())
      .then(data => {
        setEditingPayment((editingPayment) => !editingPayment)
        onSuccessfulEdit(data)
      })
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
    <>
      {!editingPayment ? 
    <tr>
      <td>${parseFloat(payment.amount).toFixed(2)}</td>
      <td>{payment.date_paid}</td>
      <td>{payment.description}</td>
      <td>{payment.is_need? "Needed" : "Wanted"}</td>
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
        {payment.is_need}
      </td>
      <td>{payment.store.name}</td>
      <td>{payment.category.category_type}</td>
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
</>
  );
}

export default Payment;