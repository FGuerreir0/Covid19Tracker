import React, { useState, useEffect } from 'react';
import './styles.scss';

//IMPORT COMPONENTS
import World from '../World/index';
import Country from '../Country/index';

//IMPORT SERVICE
import { getUser } from '../../services/userCountry';

//IMPORT NPM PACKAGES
import Particles from 'react-particles-js';
import Coranavirus from './coronavirus.png';
import FlagIconFactory from 'react-flag-icon-css';

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default function App() {
  const [userCountry, setUserCountry] = useState({});
  const [userCountryCode, setUserCountryCode] = useState({});

  useEffect(() => {
    getUser()
      .then((userData) => {
        setUserCountry(userData.country_name);
        console.log(userCountry);
        setUserCountryCode(userData.country_code.toLowerCase());
        //console.log(userData);
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
              value: 25,
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
                distance: 200,
                duration: 0.3,
                speed: 0.2,
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
              Welcome user from {userCountry}! <FlagIcon code={userCountryCode} size={'lg'} />
            </h2>
          )}
        </div>

        <World />
        {userCountry.length > 0 && <Country userCountry={userCountry} />}

        {/* COLOCAR UM ELSE CASO NÃO FAÇA LOCALIZAÇÃO DE DISPOSITIVO */}
      </div>
    </div>
  );
}
