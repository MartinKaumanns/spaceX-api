import React from 'react';

import './SearchResult.scss';
import TimeSinceLaunch from './TimeSinceLaunch';

const SearchResult = ({ answer }) => {
  return (
    answer && (
      <div className="SearchResult">
        <h1>{answer.name}</h1>
        <TimeSinceLaunch
          launchId={answer.id}
          launchTime={answer.date_local}
          Success={answer.success}
        />
      </div>
    )
  );
};

export default SearchResult;
