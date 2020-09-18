import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart(props) {
  console.log(props);
  const [lineData, setLineData] = useState(props.countryData);

  const [cases, setCases] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();

  useEffect(() => {
    setLineData(props.countryData);

    setCases(props.countryData.active);
    setRecovered(props.countryData.recovered);
    setDeaths(props.countryData.deaths);
  }, [props.countryData]);

  return (
    <div>
      <Pie
        // height={300}
        data={{
          labels: ['Active Cases', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: '',
              data: [cases, recovered, deaths],
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(0, 0, 0, 0.8)',
              ],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(0, 0, 0, 1)'],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          legend: {
            position: 'right',
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
