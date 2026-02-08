import react, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Vacations() {
  const [vacations, setVacations] = useState([])

  return (
  <>
    <h1>Vacations</h1>
    <div className="vacation">
      {
      vacations.map(vacation => 
          <div key={vacation.sku}>
              <h2>{vacation.name}</h2>
              <p>{vacation.description}</p>
              <span className="price">{vacation.price}</span>
          </div>
      )
      }
    </div>
    </>
 )
}
