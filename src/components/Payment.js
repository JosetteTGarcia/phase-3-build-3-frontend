import React from "react";

function Payment({payment}) {


  return (
    <tr>
      <td>{payment.amount}</td>
      <td>{payment.date_paid}</td>
      <td>{payment.description}</td>
      <td>{payment.isNeed? "Needed" : "Wanted"}</td>
      <td>{payment.store_id}</td>
      <td>{payment.category_id}</td>
      <td> <button type="button" className="btn btn-primary">
        Remove Payment
      </button>
      </td>
    </tr>
  );
}

export default Payment;