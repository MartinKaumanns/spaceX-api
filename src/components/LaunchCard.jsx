import React from 'react';
import './LaunchCard.scss';

const LaunchCard = ({ launch }) => {
  // console.log(launch);
  return (
    <article className="launches-card">
      <h3>{launch.name}</h3>
      <small>Id: {launch.id}</small>
    </article>
  );
};

export default LaunchCard;
