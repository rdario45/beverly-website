import { useEffect, useState } from "react";
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

function BalanceScreen({ fecha, balance, loadBalance }) {

  useEffect(() => {
    loadBalance(fecha);
  }, [fecha]);

  console.log(Object.entries(balance).map(value => value[0]))
  const data = {
    labels: balance? Object.entries(balance).map(value => value[0]) : [],
    datasets: [
      {
        label: '# of Votes',
        data: balance? Object.entries(balance).map(value => value[1]) : [],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div style={{ width: '30%', margin: '50px auto' }}>
      <Chart type="pie" data={data} />
    </div>
  )
}

export default BalanceScreen;