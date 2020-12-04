import React from "react"
import Table from "remark-grid-tables"

const Closerlook = () => {
  return (
    <>
      <div>
        <h2
          style={{
            paddingTop: `80px`,
            display: `flex`,
            justifyContent: `center`,
            textAlign: "center",
          }}
        >
          Southern Marin - A closer look
        </h2>
        <p
          style={{
            display: `flex`,
            justifyContent: `center`,
            textAlign: "center",
          }}
        >
          {" "}
          Two cities, Marin City and Mill Valley are only 4 miles apart, but
          they are vastly different across race, income, and recreation.
        </p>
        <table class="rwd-table">
          <tr>
            <th>Mill Valley</th>
            <th>The Data</th>
            <th>Marin City</th>
            <th>The Data</th>
          </tr>
          <tr>
            <td data-th="Movie Title">Population</td>
            <td data-th="Genre">14,318 (84% white)</td>
            <td data-th="Year">Population</td>
            <td data-th="Gross">3,115</td>
          </tr>
          <tr>
            <td data-th="Movie Title">Median Income</td>
            <td data-th="Genre">$149.3K</td>
            <td data-th="Year">Median Income</td>
            <td data-th="Gross">$40.5K</td>
          </tr>
          <tr>
            <td data-th="Movie Title">Poverty Rate</td>
            <td data-th="Genre">3.5%</td>
            <td data-th="Year">Poverty Rate</td>
            <td data-th="Gross">29.2%</td>
          </tr>
          <tr>
            <td data-th="Movie Title">Recreation</td>
            <td data-th="Genre">18</td>
            <td data-th="Year">Recreation</td>
            <td data-th="Gross">2</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Closerlook
