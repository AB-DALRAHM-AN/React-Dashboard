import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      id='charts'
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{background: 'white'}}
    >
      <Inject services={[StackingColumnSeries, Legend, Category, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          return (
            <SeriesDirective
              key={index}
              dataSource={item.dataSource}
              xName={item.xName}
              yName={item.yName}
              name={item.name}
              type={item.type}
              marker={item.marker}
              width={item.width}
            />
          )
        })
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked