import React from "react";



function IncomeBreakdown({leftoverIncome, needs, wants, savings}){


  return(

    <div>
      Main Bank: {leftoverIncome} <br/>
      Savings: {savings} <br />
      Wants: {wants} <br />
      Needs: {needs} <br />

    </div>

  )
}

export default IncomeBreakdown;