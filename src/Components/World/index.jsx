import React, { useState, useEffect } from 'react';
import '../Home/styles.scss';

//IMPORT SERVICE
import { allData } from '../../services/diseaseApi';

export default function World() {
  const [geral, setgeral] = useState({});

  useEffect(() => {
    allData()
      .then((all) => {
        setgeral(all);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='information_details'>
      <p className='information_sub_title'>Worldwide</p>
      <div className='grid_container'>
        <div className='grid-item'>
          <div>
            <p>Total Cases</p>
            <p className='big_number'>{geral.cases}</p>
            <p> + {geral.todayCases}</p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <p>Total Recovered</p>
            <p className='big_number'>{geral.recovered}</p>
            <p> + {geral.todayCases}</p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <p>Total Deaths</p>
            <p className='big_number'>{geral.deaths}</p>
            <p> + {geral.todayDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
