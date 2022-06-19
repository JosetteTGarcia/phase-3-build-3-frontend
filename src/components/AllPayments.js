import React from 'react'
import Payment from './Payment';

function AllPayments({payments}){

  const paymentRows = payments.map((payment) => (
    <Payment key={payment.id} payment={payment}/>
    
    ));

  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Amount</th>
          <th scope="col">Date paid</th>
          <th scope="col">Description</th>
          <th scope="col">Needed or Wanted?</th>
          <th scope="col">Store</th>
          <th scope="col">Category</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
    <tbody>{paymentRows}</tbody>
    </table>
  )

}

export default AllPayments;