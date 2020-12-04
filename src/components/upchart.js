import React from "react"
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries,
} from "react-vis"

export default class Upchart extends React.Component {
  state = {
    useCanvas: false,
  }
  render() {
    const { useCanvas } = this.state
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS"
    const data = [
      { x: 2, y: 6 },
      { x: 3, y: 2 },
    ]
    return (
      <div>
        <XYPlot width={175} height={175} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <BarSeries data={data} />
          <LabelSeries animation allowOffsetToBeReversed data={data} />
        </XYPlot>
      </div>
    )
  }
}
