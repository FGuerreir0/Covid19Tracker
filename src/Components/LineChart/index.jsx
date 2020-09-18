import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

//IMPORT SERVICE
import { history } from '../../services/diseaseApi';

export default function LineChart(param) {
  const [lineData, setLineData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    history(param)
      .then((data) => {
        setError(false);
        setLineData(data.timeline);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [param]);

  return <div>{!error ? <Line /> : <p>No timeline for this country, so sorry...</p>}</div>;
}
