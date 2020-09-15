import React, { useState, useEffect } from 'react';
import '../Home/styles.scss';

//IMPORT SERVICE
import { getCountryData } from '../../services/diseaseApi';

export default function Country(props) {
  const [countryData, setcountryData] = useState({});
  const [country, setcountry] = useState(props.userCountry);

  useEffect(() => {
    console.log(props.userCountry);
    getCountryData(country)
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);
      })
      .catch((error) => console.log(error));
  }, [country]);

  return (
    <div className='information_details'>
      <div className='information_sub_title'>
        <p>
          {country}{' '}
          <select style={{ width: '16px', marginLeft: '2px' }}>
            <option>Something</option>
            <option>Other thing</option>
            <option>The last option</option>
          </select>
          ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
        </p>
      </div>
      <div className='grid_container'>
        <div className='grid-item'>
          <div>
            <p>Total Cases</p>
            <p className='big_number'>{countryData.cases}</p>
            <p> + {countryData.todayCases}</p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <p>Total Recovered</p>
            <p className='big_number'>{countryData.recovered}</p>
            <p> + {countryData.todayRecovered}</p>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <p>Total Deaths</p>
            <p className='big_number'>{countryData.deaths}</p>
            <p> + {countryData.todayDeaths}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
