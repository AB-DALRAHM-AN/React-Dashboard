import React from 'react'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../context/ContextProvider'

const LineChart = () => {

  const { currentColor } = useStateContext()

  return (
    <div className='m-2 md:m-10 mt-24 md: p-10 bg-white rounded-3xl'>
      <ChartComponent
        id="charts"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        height="420"
        legendSettings={{ background: "white" }}
        tooltip={{ enable: true}}
        chartArea={{ border: { width: 0 } }}
        background={currentColor === "dark" ? "#33373E" : "#fff"}
        >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective
              key={index}
              {...item}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart;