import React, { useState, useEffect } from 'react';
import '../App.scss';

//IMPORT SERVICE
import { allData } from '../services/diseaseApi';
import { getUser } from '../services/userCountry';

//IMPORT NPM PACKAGES
import Particles from 'react-particles-js';
import Coranavirus from './coronavirus.png';
import FlagIconFactory from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default function App() {
  const [geral, setgeral] = useState({});
  const [userCountry, setUserCountry] = useState({});
  const [userCountryCode, setUserCountryCode] = useState({});

  useEffect(() => {
    allData()
      .then((all) => {
        setgeral(all);
        console.log(all);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getUser()
      .then((userData) => {
        setUserCountry(userData);
        setUserCountryCode(userData.country_code.toLowerCase());
        console.log(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='app'>
      <Particles
        className='particlesJs'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 10,
              random: true,
            },
            shape: {
              type: 'image',
              image: [{ src: Coranavirus, height: 30, width: 34 }],
            },
            size: {
              value: 40,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                size_min: 10,
                sync: false,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.3,
                speed: 0.1,
              },
            },
          },
        }}
      ></Particles>

      <div className='information_box'>
        <div>
          <h1>Covid-19 Tracker</h1>
          {userCountryCode.length > 0 && userCountry && (
            <h2>
              Welcome user from {userCountry.country_name}!{' '}
              <FlagIcon code={userCountryCode} size={'lg'} />
            </h2>
          )}
        </div>
        <div className='information_details'>
          <p className='information_sub_title'>Worlwide</p>
          <div>
            <p>
              <strong>Total Cases: </strong> {geral.cases}
            </p>
            <p>
              <strong>Recovered: </strong>
              {geral.recovered}
            </p>
            <p>
              <strong>Deaths: </strong>
              {geral.deaths}
            </p>
          </div>
        </div>

        <div className='information_details'>
          <p className='information_sub_title'>{userCountry.country_name}</p>
          <div>
            <p>
              <strong>Total Cases: </strong> {geral.cases}
            </p>
            <p>
              <strong>Recovered: </strong>
              {geral.recovered}
            </p>
            <p>
              <strong>Deaths: </strong>
              {geral.deaths}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
