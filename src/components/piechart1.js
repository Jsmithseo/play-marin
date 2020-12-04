import React from "react"
import { RadialChart } from "react-vis"
import Layout from "./layout"

const myData = [{ angle: 3.6 }, { angle: 10 }]

const PieChart = () => {
  return (
    <>
      <Layout>
        <div>POPULATION BY RACE</div>
        <RadialChart data={myData} width={175} height={175} />
        <div>non-white: 28% </div>
        <div>White: 72% </div>
      </Layout>
    </>
  )
}

export default PieChart
