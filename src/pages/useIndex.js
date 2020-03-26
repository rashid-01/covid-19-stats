import { useState, useEffect } from 'react';
import AbortController from "abort-controller"
import axios from 'axios'

function useIndex(api_url) {
    const abortController = new AbortController()
    const signal = abortController.signal
    const [confirmedStats, setConfirmed] = useState(0)
    const [deathStats, setDeaths] = useState(0)
    const [recoveredStats, setRecovered] = useState(0)
    const [countryDetails, setCountryDetails] = useState([])
    useEffect(() => {
        if (api_url === 'https://covid19.mathdro.id/api/countries') {
            fetch(api_url, { signal: signal }).then(res => {
            const jsonData = res.json()
            console.log('countries', jsonData)
            // setCountryDetails(res.data.countries)
        }).catch((err) => {
            console.log('erroruyyu', err)
        })
        } else {
            fetch(api_url, { signal: signal }).then(res => { 
                const jsonData = res.json()
                console.log('>>>>>>>', jsonData)
                // setConfirmed(res.data.confirmed.value)
                // setDeaths(res.data.deaths.value)
                // setRecovered(res.data.recovered.value)
            }).catch((err) => {
               console.log('error', err)
            })
        }
        return function cleanup() {
            abortController.abort()
        }
    }, [api_url])
    return {
        confirmedStats, deathStats, recoveredStats, countryDetails
    }
}

export default useIndex;