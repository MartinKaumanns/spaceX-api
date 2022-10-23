import React, { useEffect, useState } from 'react';
import PastLaunches from './components/PastLaunches';
import SearchFeature from './components/SearchFeature';

const Home = () => {
  const [pastLaunchesData, setPastLauchesData] = useState('');
  // Fetch data for the last three launches
  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/past')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const launchesData = data.slice(Math.max(data.length - 3));
        // console.log('lauchesData:', launchesData);
        setPastLauchesData(launchesData);
      });
  }, []);

  return (
    <div>
      <SearchFeature />
      {pastLaunchesData && <PastLaunches data={pastLaunchesData} />}
    </div>
  );
};

export default Home;
