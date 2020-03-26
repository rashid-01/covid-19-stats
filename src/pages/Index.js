import React from 'react';
import { createGlobalStyle } from 'styled-components';
import StatBlocks from '../components/StatBlocks';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function Indexpage() {
    return (
        <div>
            <GlobalStyle/>
            <StatBlocks url={'https://covid19.mathdro.id/api'}></StatBlocks>
            <CountrySelector></CountrySelector>
        </div>
    )
}