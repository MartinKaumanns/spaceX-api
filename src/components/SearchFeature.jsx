import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar';
import SearchError from './SearchError';
import SearchResult from './SearchResult';

const SearchFeature = () => {
  const [searchId, setSearchId] = useState('');
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setSearchId(event.target.value.trimStart()); // trimStart() Method disables to start input with whitespaces
  };

  const handleSubmit = () => {
    searchId &&
      fetch(`https://api.spacexdata.com/v4/launches/${searchId}`)
        .then((res) => {
          if (res.ok) {
            // console.log(res.ok);
            return res.json();
          } else {
            setError(true);
          }
        })
        .then((data) =>
          // console.log(data);
          setAnswer(data)
        );

    setSearchId('');
    setError(false);
  };

  return (
    <div>
      <Searchbar
        searchId={searchId}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {error ? <SearchError /> : <SearchResult answer={answer} />}
    </div>
  );
};

export default SearchFeature;
