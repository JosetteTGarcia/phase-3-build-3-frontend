import React, { useState} from "react";

function Payment({payment, deletePayment}) {

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
    <tr>
      <td>${parseFloat(payment.amount).toFixed(2)}</td>
      <td>{payment.date_paid}</td>
      <td>{payment.description}</td>
      <td>{payment.isNeed? "Needed" : "Wanted"}</td>
      <td>{payment.store.name}</td>
      <td>{payment.category.category_type}</td>
      <td> <button type="button" className="btn btn-primary" onClick={ handleDelete }>
        Remove Payment
      </button>
      </td>
    </tr>
  );
}

export default Payment;