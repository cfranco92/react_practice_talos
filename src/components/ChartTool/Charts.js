import React, { useState, useEffect, useRef } from 'react'
import styles from './Charts.module.css'
import Chart from 'chart.js'


const Charts = ({ stats, bases }) => {
    const [statsName] = useState(stats)
    const [basesData] = useState(bases)
    console.log('puto el que lo lea', statsName)


    const chartRef = useRef()

    const clases = styles

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d')
        // const myChart = new Chart(ctx, {
        new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
                labels: statsName,
                datasets: [
                    {
                        label: 'Pokemon 1',
                        // data: [2, 10, 12, 6, 2, 3],
                        data: basesData,
                        backgroundColor: [
                            // 'rgba(255, 99, 132, 0.2)',
                            // 'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                            // 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            // 'rgba(255, 99, 132, 1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                    // {
                    //     label: 'Pokemon 2',
                    //     data: [10, 10, 12, 6, 2, 3],
                    //     backgroundColor: [
                    //         'rgba(255, 99, 132, 0.2)',
                    //         'rgba(54, 162, 235, 0.2)',
                    //         'rgba(255, 206, 86, 0.2)',
                    //         'rgba(75, 192, 192, 0.2)',
                    //         'rgba(153, 102, 255, 0.2)',
                    //         'rgba(255, 159, 64, 0.2)'
                    //     ],
                    //     borderColor: [
                    //         'rgba(255, 99, 132, 1)',
                    //         'rgba(54, 162, 235, 1)',
                    //         'rgba(255, 206, 86, 1)',
                    //         'rgba(75, 192, 192, 1)',
                    //         'rgba(153, 102, 255, 1)',
                    //         'rgba(255, 159, 64, 1)'
                    //     ],
                    //     borderWidth: 1
                    // }
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