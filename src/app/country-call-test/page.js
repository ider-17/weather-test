"use client"

import { useEffect, useState } from "react";


export default function Home() {

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const getCountries = async () => {

            setIsLoading(true)

            const response = await fetch('https://countriesnow.space/api/v0.1/countries');

            const countries = await response.json();

            setCountries(countries.data)

            setIsLoading(false)
        }

        getCountries();

        console.log('render in useEffect')

    }, [])

    return (
        <div className="h-screen bg-gray-100">
            {isLoading ?
                <div>Loading...</div> :
                countries.map(country => <div key={country.iso3}>{country.country}</div>)}
        </div>
    );
}