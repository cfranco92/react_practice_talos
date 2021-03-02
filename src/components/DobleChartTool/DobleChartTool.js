import React, { useState, useEffect, useRef } from 'react'
import styles from './DobleChartTool.module.css'
import Chart from 'chart.js'

const DobleChartTool = ({ stats, bases, name, color, stats2, bases2, name2, color2 }) => {
  const [statsName] = useState(stats)
  const [basesData] = useState(bases)
  const [pokemonName] = useState(name)
  const [pokemonColor] = useState(color === 'white' ? 'black' : color )
  const [basesData2] = useState(bases2)
  const [pokemonName2] = useState(name2)
  const [pokemonColor2] = useState(color2 === 'white' || color2 === color ? 'black-light' : color2 )

  const chartRef = useRef()
  const clases = styles

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: statsName,
        datasets: [
          {
            label: String(pokemonName).toUpperCase(),
            data: basesData,
            backgroundColor: [
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
            ],
            borderColor: [
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
              pokemonColor,
            ],
            borderWidth: 1
          },
          {
            label: String(pokemonName2).toUpperCase(),
            data: basesData2,
            backgroundColor: [
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
            ],
            borderColor: [
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
              pokemonColor2,
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
