import React, {useState, useEffect} from 'react';
import './App.scss';
import { allData } from './services/diseaseApi'
import Particles from 'react-particles-js'
import Coranavirus from './coronavirus.png'

export default function App() {
  const [geral, setgeral] = useState({});

  useEffect(() => {
    allData()
    .then (all => {setgeral(all); console.log(all)})
    .catch(error => console.log(error))
  }, []);

  return (
    <>
    <div className='app'>
      <Particles className='particlesJs'
    params={{
	    particles: {
	        number: {
	            value: 30,
	            density: {
	                enable: true,
	                value_area: 800
	            }
	        },
	        line_linked: {
	            enable: false
	        },
	        move: {
	            speed: 10,
              random:true
          },
	        shape: {
	            type: 'image',
	            image: [
                    {src: Coranavirus, height: 30, width: 34},
	            ]
	        },
	        size: {
	            value: 40,
	            random: true,
	            anim: {
	                enable: true,
	                speed: 0.1,
	                size_min: 10,
	                sync: false
	            }
          }
      },
      interactivity:{
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
      },
    modes:{
      repulse: {
        distance: 100,
        duration: 0.3,
        speed:0.1
      }
    }
    },
      
	}} >
  </Particles>
  <div className='information_box'>
    <h1>Covid-19 Tracker</h1><br></br>
  <p><strong>Total Cases: </strong> {geral.cases}</p>
  <p><strong>Recovered: </strong>{geral.recovered}</p>
  <p><strong>Deaths: </strong>{geral.deaths}</p>
  
  </div>
  </div>
  <div className="details_button">
  <div className="round">
		<a className="button" href="#">See Countries</a>
    </div>
  </div>
  </>
  )
}

