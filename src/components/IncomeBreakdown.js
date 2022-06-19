import React, {useState, useEffect} from "react";



function IncomeBreakdown({leftoverIncome}){
  const [savings, setSavings] = useState(0)
  const [needs, setNeeds] = useState(0)
  const [wants, setWants] = useState(0)


  useEffect(() => {
    setSavings(leftoverIncome)
    }, [leftoverIncome])

    


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