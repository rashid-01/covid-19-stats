import React, { useState } from 'react';
import useIndex from '../pages/useIndex';
import StatBlocks from './StatBlocks';

export default function CountrySelector() {
  const { countryDetails } = useIndex(
    'https://covid19.mathdro.id/api/countries');
  console.log('country >>>>', countryDetails)  
  const [selectedCountry, setSelectedCountry] = useState('IN');
//   if (loading) return <p>Loading...</p>;
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing: {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {countryDetails.map((country, code) => (
          <option
            selected={selectedCountry === country.iso3[code]}
            key={code}
            value={country.iso3[code]}
          >
            {country.name}
          </option>
        ))}
      </select>
      <StatBlocks
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></StatBlocks>
    </div>
  );
}