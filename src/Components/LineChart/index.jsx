import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

//IMPORT SERVICE
import { history } from '../../services/diseaseApi';
const options = {
  legend: {
    position: 'top',
    labels: {
      fontColor: 'black',
      fontSize: 15,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,

  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format('0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const buildCasesChart = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data) {
    if (lastDataPoint < data[date]) {
      let newDataPoint = {
        x: date,
        y: data[date],
      };
      chartData.push(newDataPoint);
    } else {
      let newDataPoint = {
        x: date,
        y: lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[date];
  }
  console.log(chartData);
  return chartData;
};

export default function PieChart(props) {
  const [cases, setCases] = useState();
  const [recovered, setRecovered] = useState();
  const [deaths, setDeaths] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      history(props.country)
        .then((response) => {
          let chartCasesData = buildCasesChart(response.cases);
          setCases(chartCasesData);
          chartCasesData = buildCasesChart(response.recovered);
          setRecovered(chartCasesData);
          chartCasesData = buildCasesChart(response.deaths);
          setDeaths(chartCasesData);
          setShow(true);
        })
        .catch((error) => setShow(false));
    };

    fetchData();
  }, [props]);

  return (
    <div style={{ cursor: 'pointer' }}>
      {show ? (
        <Line
          data={{
            datasets: [
              {
                label: 'Cases',
                borderColor: 'red',
                data: cases,
              },
              {
                label: 'Deaths',
                borderColor: 'black',
                data: deaths,
              },
              {
                label: 'Recovered',
                borderColor: 'green',
                data: recovered,
              },
            ],
          }}
          options={options}
        />
      ) : (
        <p style={{ fontSize: '15px' }}>
          No data enough to show at this moment to do a line chart{' '}
        </p>
      )}
    </div>
  );
}
