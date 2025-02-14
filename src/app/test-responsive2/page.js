'use client'

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
        <div className="box-border flex flex-col sm:flex-row sm:justify-center sm:items-center">
            <div className="absolute self-center z-[2] bottom-[-50px] bg-gray-100 rounded-full w-[100px] h-[100px] flex justify-center items-center gap-[5px] sm:hidden ">
                <img className="w-[30px] h-[80px] " src="/pinecone-logo-half.svg"></img>
                <img className="w-[30px] h-[80px] rotate-[180deg] " src="/pinecone-logo-half.svg"></img>
            </div>

            <div className="relative w-full bg-gray-100 h-screen flex justify-center sm:w-1/2 ">
                <img className="absolute top-7 left-5 w-[100px] " src="/bg-sun.svg"></img>
                <div>
                    <input className="absolute w-[200px] ml-3 py-2 px-5 top-5 left-5 rounded-full sm:w-[300px] sm:py-4 sm:placeholder:font-semibold sm:placeholder:text-[20px] lg:mt-5 lg:ml-24 lg:w-[370px] lg:py-6 " placeholder="Search" />
                </div>
                <div className="relative w-[300px] backdrop-blur-xl p-5 rounded-3xl top-16 h-[440px] shadow-xl sm:top-[100px] lg:w-[400px] lg:h-[580px] lg:top-[120px] ">
                    <img className="absolute top-[100px] left-[90px] w-[130px] lg:top-[150px] lg:w-[150px] " src="/sun.svg"></img>
                    <p className="text-gray-500 lg:mt-5 lg:ml-4">February 12, 2025</p>
                    <h3 className="text-3xl font-semibold lg:mt-2 lg:ml-4 lg:text-[40px] ">Ulaanbaatar
                        <img className="mx-[200px] my-[-50px] lg:ml-[230px] " src="/localization_icon.svg"></img>
                    </h3>
                    <h1 className="absolute bottom-[70px] text-[100px] font-semibold bg-gradient-to-b from-black to-white text-transparent ... bg-clip-text lg:top-[300px] ">-12°</h1>
                    <p className="absolute bottom-[70px] text-yellow-500 lg:top-[440px] lg:text-xl sm:font-semibold ">Sunny</p>
                    <div className="absolute bottom-[30px] flex justify-between w-[260px] lg:top-[480px] ">
                        <img className="w-7 " src="/Home.svg"></img>
                        <img className="w-7 " src="/User.svg"></img>
                        <img className="w-7 " src="/button-heart.svg"></img>
                        <img className="w-7 " src="/Pin.svg"></img>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center bg-black h-screen sm:w-1/2 ">
                <div className="relative w-[300px] backdrop-blur-xl p-5 rounded-3xl top-16 h-[440px] shadow-xl sm:top-[100px] lg:w-[400px] lg:h-[580px] lg:top-[120px] ">
                    <img className="absolute top-[100px] left-[90px] w-[130px] lg:top-[150px] lg:w-[170px] " src="/moon.svg"></img>
                    <p className="text-gray-500">February 12, 2025</p>
                    <h3 className="text-3xl text-white font-semibold">Ulaanbaatar
                        <img className="mx-[200px] my-[-50px] " src="/localization_icon.svg"></img>
                    </h3>
                    <h1 className="absolute bottom-[70px] text-[100px] font-semibold bg-gradient-to-b from-[#eee1e1] to-[#2f3030] text-transparent ... bg-clip-text lg:top-[300px] ">-27°</h1>
                    <p className="absolute bottom-[70px] text-blue-700 lg:top-[440px] lg:text-xl sm:font-semibold ">Sunny</p>
                    <div className="absolute bottom-[30px] flex justify-between w-[260px] lg:top-[480px] ">
                        <img className="w-7 " src="/Home.svg"></img>
                        <img className="w-7 " src="/User.svg"></img>
                        <img className="w-7 " src="/button-heart.svg"></img>
                        <img className="w-7 " src="/Pin.svg"></img>
                    </div>
                </div>
            </div>
            <div className="absolute bg-gray-100 rounded-full w-[100px] h-[100px] sm:flex justify-center items-center gap-[5px] hidden ">
                <img className="w-[30px] h-[80px] " src="/pinecone-logo-half.svg"></img>
                <img className="w-[30px] h-[80px] rotate-[180deg] " src="/pinecone-logo-half.svg"></img>
            </div>
        </div>
    )
}