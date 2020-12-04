import React from "react"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas,
} from "react-vis"

export default class SideChart extends React.Component {
  state = {
    useCanvas: false,
  }
  render() {
    const { useCanvas } = this.state
    const BarSeries = useCanvas
      ? HorizontalBarSeriesCanvas
      : HorizontalBarSeries
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS"
    return (
      <div>
        <XYPlot width={175} height={175} stackBy="x">
          <VerticalGridLines />
          <HorizontalGridLines />
          <BarSeries
            data={[
              { y: 1, x: 2.5 },
              { y: 2, x: 3 },
              { y: 3, x: 5 },
              { y: 4, x: 6 },
            ]}
          />
        </XYPlot>
      </div>
    )
  }
}
