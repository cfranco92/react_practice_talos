import React, { useEffect, useRef } from 'react'
import styles from './DobleChartTool.module.css'
import Chart from 'chart.js'

const DobleChartTool = ({ stats, bases, name, color, bases2, name2, color2 }) => {
  const chartRef = useRef()
  const clases = styles

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: stats,
        datasets: [
          {
            label: String(name).toUpperCase(),
            data: bases,
            backgroundColor: [
              color,
              color,
              color,
              color,
              color,
              color,
            ],
            borderColor: [
              color,
              color,
              color,
              color,
              color,
              color,
            ],
            borderWidth: 1
          },
          {
            label: String(name2).toUpperCase(),
            data: bases2,
            backgroundColor: [
              color2,
              color2,
              color2,
              color2,
              color2,
              color2,
            ],
            borderColor: [
              color2,
              color2,
              color2,
              color2,
              color2,
              color2,
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  })

  return (
    <div className={clases.rectangle}>
      <canvas
        ref={chartRef}
        width='400'
        height='400'>
      </canvas>
    </div>
  )

}

export default DobleChartTool
