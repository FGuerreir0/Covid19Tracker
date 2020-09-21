import React from 'react';
import './styles.scss';

import { ExternalLink } from 'react-external-link';

export default function Footer() {
  return (
    <div className='footer'>
      <small>
        <span role='img' aria-label='Dev with Mask'>
          😷
        </span>{' '}
        Made with all protection by{' '}
        <ExternalLink href='https://www.linkedin.com/in/fabiofsguerreiro/'>
          <span>Fábio Guerreiro</span>
        </ExternalLink>{' '}
        <span role='img' aria-label='Dev with Mask'>
          😷
        </span>{' '}
      </small>
    </div>
  );
}
