import React from "react"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
} from "react-vis"

export default class Upcharttwo extends React.Component {
  state = {
    useCanvas: false,
  }
  render() {
    const { useCanvas } = this.state
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS"
    return (
      <div>
        <XYPlot width={175} height={175} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />

          <BarSeries
            data={[
              { x: 2, y: 6 },
              { x: 3, y: 5 },
            ]}
          />
        </XYPlot>
      </div>
    )
  }
}
