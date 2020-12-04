import React from "react"
import { RadialChart, LabelSeries } from "react-vis"
import { Container, Row, Col, Button } from "react-grid-system"
import Layout from "./layout"
const myData = [{ angle: 1 }, { angle: 10 }]
const myDataTwo = [{ angle: 1 }, { angle: 5 }]
const myDataThree = [{ angle: 1 }, { angle: 5 }]

const PieChartTwo = () => {
  return (
    <>
      <Layout style={{}}>
        <Row>
          <Col lg={12}>
            <center>
              <h2>Programs, Partners and Data</h2>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div>
              <p>Gender</p>
              <RadialChart data={myData} width={175} height={175} />
              <p>60% Boys 40% Girls</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>Ethnicity</p>
              <RadialChart data={myDataTwo} width={175} height={175} />
              <p>80% People of Color 20% White</p>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <p>Residency</p>
              <RadialChart data={myDataThree} width={175} height={175} />
              <p> 75% Marin City resident 25% Non-resident</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default PieChartTwo
