import React from 'react';
import classNames from 'classnames';
import '../styles/aboutMenu.css';

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div 
      className={classNames(subContainerClass, { 'active-subheading': active })} 
      onClick={onClick}  /* Add onClick to the div */
    >
      <h3>{title}</h3>
      <div className={classNames('p-container', { 'active': active })}>
        {content}
      </div>
    </div>
  );
};

export default AboutSubheading;
