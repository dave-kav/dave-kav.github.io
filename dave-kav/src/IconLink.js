import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ url, icon, text, className }) => (
  <span>
    <FontAwesomeIcon icon={icon}/>
    <a
        className={className}
        style={{marginLeft: '10px'}}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
  </span>
);

export default IconLink;