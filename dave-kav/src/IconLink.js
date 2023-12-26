import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ url, icon, text, className }) => (
  <span>
    <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={className} icon={icon}/>
      </a>
  </span>
);

export default IconLink;