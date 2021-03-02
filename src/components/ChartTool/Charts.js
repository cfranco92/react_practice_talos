import React, { useState, useEffect, useRef } from 'react'
import styles from './Charts.module.css'
import Chart from 'chart.js'

const Charts = ({ stats, bases, name, color }) => {
  const [statsName] = useState(stats)
  const [basesData] = useState(bases)
  const [pokemonName] = useState(name)
  const [pokemonColor] = useState(color === 'white' ? 'black' : color )

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

export default Charts
