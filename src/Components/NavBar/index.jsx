import React from 'react';
import './styles.scss';

export default function NavBar(props) {
  return (
    <div className='navbar'>
      <div className='title'>
        <h1>COVID-19 TRACKER </h1>
        {/*{userCountryCode.length > 0 && userCountry && (
              <h2>
                - Welcome user from {userCountry}! <FlagIcon code={userCountryCode} size={'lg'} />
              </h2>
            )}*/}
      </div>
      <div className='information_button'>
        <i className='fas fa-comment-medical' onClick={() => props.display()}></i>
      </div>
    </div>
  );
}
