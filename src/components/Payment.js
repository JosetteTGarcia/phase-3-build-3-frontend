import React from "react";

function Payment({payment}) {


  return (
    <tr>
      <td>${parseFloat(payment.amount).toFixed(2)}</td>
      <td>{payment.date_paid}</td>
      <td>{payment.description}</td>
      <td>{payment.isNeed? "Needed" : "Wanted"}</td>
      <td>{payment.store.name}</td>
      <td>{payment.category.category_type}</td>
      <td> <button type="button" className="btn btn-primary">
        Remove Payment
      </button>
      </td>
    </tr>
  );
}

export default Payment;