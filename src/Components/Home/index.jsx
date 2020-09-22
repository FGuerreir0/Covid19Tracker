import React, { useState, useEffect } from 'react';
import './styles.scss';

//IMPORT COMPONENTS
import NavBar from '../NavBar';
import World from '../World';
import Country from '../Country';

//IMPORT SERVICE
import { getUser } from '../../services/userCountry';

//IMPORT NPM PACKAGES
import Particles from 'react-particles-js';
//import FlagIconFactory from 'react-flag-icon-css';
import Modal from 'react-modal';

//IMPORT IMAGES
import Coranavirus from './public/coronavirus.png';
import Safety from './public/safety.png';
import Symptons from './public/symptons.jpg';

//const FlagIcon = FlagIconFactory(React, { useCssModules: false });

export default function App() {
  const [userCountry, setUserCountry] = useState({});
  //const [userCountryCode, setUserCountryCode] = useState({});
  const [show, setShow] = useState(false);

  function display() {
    setShow(true);
  }

  useEffect(() => {
    getUser()
      .then((userData) => {
        setUserCountry(userData.country_name);
        //console.log(userCountry);
        //    setUserCountryCode(userData.country_code.toLowerCase());
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
              value: Math.floor(Math.random() * 25 - 15 + 1) + 15,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 3,
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
        <NavBar display={() => display()} />
        <World />
        {userCountry.length > 0 && <Country userCountry={userCountry} />}
      </div>

      {/*MODAL CONFIGURATION */}
      <div className='modal_position'>
        <Modal
          isOpen={show}
          onRequestClose={() => setShow(false)}
          className='Modal'
          overlayClassName='Overlay'
        >
          <div>
            <div className='modal_header'>
              <h3>Protect Yourself & Others</h3>
              <div style={{ cursor: 'pointer', color: 'red' }}>
                <i class='far fa-times-circle' onClick={() => setShow(false)}></i>
              </div>
            </div>

            <div className='modal_content'>
              <img src={Safety} alt='Safety Measures' />
              <img src={Symptons} alt='Symptons Covid' />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
