import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  console.log(props);

  const [cases, setCases] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();

  useEffect(() => {
    setCases(props.countryData.active);
    setRecovered(props.countryData.recovered);
    setDeaths(props.countryData.deaths);
  }, [props.countryData]);

  return (
    <div style={{ cursor: 'pointer' }}>
      <Pie
        // height={300}
        data={{
          labels: ['Active Cases', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: '',
              data: [cases, recovered, deaths],
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(0, 0, 0, 0.9)',
              ],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(0, 0, 0, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          legend: {
            position: 'right',
            labels: {
              fontColor: 'black',
              fontSize: 12,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
