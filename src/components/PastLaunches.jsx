import React from 'react';
import Heading from './Heading';
import LaunchCard from './LaunchCard';
import './PastLaunches.scss';

const PastLaunches = ({ data }) => {
  const lastThreeLaunches = data;

  return (
    <div className="PastLaunches">
      <Heading />
      <div className="lc-container">
        {lastThreeLaunches.map((launch) => (
          <div key={launch.id}>
            <LaunchCard launch={launch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastLaunches;
