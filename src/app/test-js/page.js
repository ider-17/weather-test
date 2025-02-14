'use client';

import { useEffect, useState } from "react";

// 'https://countriesnow.space/api/v0.1/countries'

export default function Home() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries')

            const countries = await response.json();

            console.log(countries)

            setCountries(countries.data)

            console.log(countries);
        }

        getData()
    }, [])

    return (
        <div className="h-screen bg-gray-100">
            <input className="py-4 px-2 rounded-full m-10" />
        </div>
    )
}
