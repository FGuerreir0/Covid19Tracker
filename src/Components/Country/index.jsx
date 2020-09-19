import React, { useState, useEffect } from 'react';
import '../Home/styles.scss';

//IMPORT COMPONENT
import LineChart from '../LineChart/index';

import PieChart from '../PieChart/index';

//IMPORT SERVICE
import { getCountryData, allCountries, getYesterdayCountryData } from '../../services/diseaseApi';

export default function Country(props) {
  //TODAY DATA
  const [countryData, setcountryData] = useState({});
  //YESTERDAY DATA
  const [yesterdayData, setYesterdayData] = useState({});
  //ACTIVE COUNTRY
  const [country, setCountry] = useState(props.userCountry);
  //COUNTRIES LIST
  const [countries, setCountries] = useState({});

  // GET COUNTRY LIST
  useEffect(() => {
    allCountries()
      .then((countries) => {
        console.log(countries);
        setCountries(countries);
      })
      .catch((error) => console.log(error));
  }, [country]);

  // GET TODAY AND YESTERDAY DATA
  useEffect(() => {
    getCountryData(country)
      .then((countryData) => {
        console.log(countryData);
        setcountryData(countryData);
      })
      .catch((error) => console.log(error));
  }, [country]);

  useEffect(() => {
    getYesterdayCountryData(country)
      .then((countryData) => {
        setYesterdayData(countryData);
      })
      .catch((error) => console.log(error));
  }, [country]);

  //HANDLE SELECT CHANGE
  const handleSelectChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  //VIEW

  return (
    <div className='information_details'>
      <div className='information_sub_title'>
        <p>
          {country}{' '}
          {countries.length > 0 && (
            <select
              style={{ width: '16px', marginLeft: '2px' }}
              onChange={(event) => handleSelectChange(event)}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          )}
        </p>
      </div>
      <div className='grid_principal_container'>
        <div className='grid_container'>
          <div className='grid-item'>
            <div>
              <p>Total Cases</p>
              <p className='big_number'>{countryData.cases}</p>
              {countryData.todayCases !== 0 &&
              countryData.todayRecovered !== 0 &&
              countryData.todayDeaths !== 0 ? (
                <p> + {countryData.todayCases}</p>
              ) : (
                <p> + {yesterdayData.todayCases}</p>
              )}
            </div>
          </div>
          <div className='grid-item'>
            <div>
              <p>Total Recovered</p>
              <p className='big_number'>{countryData.recovered}</p>
              {countryData.todayCases !== 0 &&
              countryData.todayRecovered !== 0 &&
              countryData.todayDeaths !== 0 ? (
                <p> + {countryData.todayRecovered}</p>
              ) : (
                <p> + {yesterdayData.todayRecovered}</p>
              )}
            </div>
          </div>
          <div className='grid-item'>
            <div>
              <p>Total Deaths</p>
              <p className='big_number'>{countryData.deaths}</p>
              {countryData.todayCases !== 0 &&
              countryData.todayRecovered !== 0 &&
              countryData.todayDeaths !== 0 ? (
                <p> + {countryData.todayDeaths}</p>
              ) : (
                <p> + {yesterdayData.todayDeaths}</p>
              )}
            </div>
          </div>
          <div className='grid-item grid-item-active'>
            <div>
              <p>Active</p>
              <p className='big_number'>{countryData.active}</p>
            </div>
          </div>
        </div>

        <div className='grid_chart_container'>
          <div className='grid_chart_item'>
            <PieChart countryData={countryData} />
          </div>
          <div className='grid_chart_item'>
            <LineChart param={country} />
          </div>
        </div>
      </div>
    </div>
  );
}
