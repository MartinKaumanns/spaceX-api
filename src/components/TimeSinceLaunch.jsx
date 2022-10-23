import React, { useEffect, useState } from 'react';
import './TimeSinceLaunch.scss';

// 607a37565a906a44023e0866
// 5fe3af84b3467846b3242161
// 62582a6f5988f159024b964b
// 5eb87d39ffd86e000604b37e

// 5eb87cd9ffd86e000604b32a  <- Mission failed

const TimeSinceLaunch = ({ launchId, launchTime, Success }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const launchTimeInMillis = Date.parse(launchTime);

  const getTime = () => {
    const time = Date.now() - launchTimeInMillis;

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(launchTimeInMillis);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="TimeSinceLaunch">
      <div className="time-id-container">
        <div className="time-wrapper">
          <h3>Elapsed time since launch</h3>
          <h2>{`${days > 365 ? Math.floor(days / 365) + ' y' : days + ' d'} | ${
            hours + ' h'
          } | ${minutes < 2 ? minutes + ' min' : minutes + ' mins'} | ${
            seconds < 10 ? '0' + seconds : seconds
          } ${seconds < 2 ? ' sec' : ' secs'}`}</h2>
        </div>
        <small> Id: {launchId}</small>
      </div>
      <div
        className={`color-indicator + ${Success ? 'success' : 'fail'}`}
      ></div>
    </div>
  );
};

export default TimeSinceLaunch;
