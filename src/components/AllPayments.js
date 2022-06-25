import React from "react";
import Payment from './Payment';



function AllPayments({
  payments,
  deletePayment
}){


  const paymentRows = payments.map((payment) => (
    <Payment 
      key={payment.id} 
      payment={payment}
      deletePayment={deletePayment}
    />
    ));

  
  return (
    <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Amount</th>
          <th scope="col">Date Paid</th>
          <th scope="col">Description</th>
          <th scope="col">Needed or Wanted?</th>
          <th scope="col">Store</th>
          <th scope="col">Category</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
    <tbody>{paymentRows}</tbody>
    </table>

    </div>

    


  )

}

export default AllPayments;