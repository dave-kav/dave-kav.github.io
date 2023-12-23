import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ url, icon, text, className }) => (
  <a
    className={className}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon}/> {text}
  </a>
);

export default IconLink;