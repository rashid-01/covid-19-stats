import React from 'react';
import styled from 'styled-components';
import useIndex from '../pages/useIndex';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

export default function StatBlocks({url}) {
  const { confirmedStats, deathStats, recoveredStats, countryDetails } = useIndex(url)
    return (
        <StatGrid>
            <StatBlock>
                <h3 style={{color:'yellow'}}>Confirmed:</h3>
                <span>{confirmedStats}</span>
            </StatBlock>
            <StatBlock>
                <h3>Deaths:</h3>
                <span>{deathStats}</span>
            </StatBlock>
            <StatBlock>
                <h3>Recovered:</h3>
                <span>{recoveredStats}</span>
            </StatBlock>
        </StatGrid>
    )
}