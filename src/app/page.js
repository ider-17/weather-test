"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState();

  // console.log(value, "hdahf")

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f3ba84b06d684526a46225752251302&q=${selectedCity}`);
      const data = await response.json();
      console.log(data, "dhaldfs")
      setWeather(data);
    }
    getWeather();
  }, [selectedCity])
  // console.log(weather, "lsahd");

  useEffect(() => {
    const getContries = async () => {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const data = await response.json();
      setCountries(data.data);
    };
    getContries();
  }, [])

  const arr = [];
  countries.map((country) => country.cities.map((city) => arr.push(`${city}, ${country.country}`)));
  // console.log(arr)

  const filteredData = arr.filter((a) => {
    return (a.toLowerCase().startsWith(value.toLowerCase()))
  }).slice(0, 4);

  // console.log(filteredData)

  const handleCity = (index) => {
    setSelectedCity(filteredData[index])
  }

  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="absolute w-[940px] h-[940px] border rounded-full flex justify-center items-center border-gray-200 opacity-30 " >
        <div className="absolute w-[740px] h-[740px] border border-gray-200 rounded-full opacity-30 " ></div>
        <div className="absolute w-[540px] h-[540px] border border-gray-200 rounded-full opacity-30 " ></div>
        <div className="absolute w-[340px] h-[340px] border border-gray-200 rounded-full opacity-30 " ></div>
        <div className="absolute w-[140px] h-[140px] border border-gray-200 rounded-full opacity-30 " ></div>
      </div>
      <img className="absolute top-[3%] left-[3%] " src="/bg-sun.svg"></img>
      <img className="absolute bottom-[10%] right-[3%] " src="/background-moon.svg"></img>
      <div className="flex justify-center absolute w-[200px] h-[200px] ">
        <div className=" w-[140px] self-center z-[1] h-[140px] items-center flex justify-center rounded-full bg-gray-100">
          <img className="w-[50px] h-[80px]" src="/pinecone-logo-half.svg"></img>
          <img className="rotate-180 w-[50px] h-[80px]" src="/pinecone-logo-half.svg"></img>
        </div>
        <div className="absolute top-[159px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black z-[2]"></div>
        <div className="absolute w-[50px] h-[60px] top-[150px] left-[80px] bg-gray-100 z-[1] "></div>
        <div className="absolute top-[-59px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black rotate-[-90deg] z-[2]"></div>
        <div className="absolute w-[50px] h-[60px] top-[-10px] left-[80px] bg-gray-100 z-[1] "></div>
      </div>
      <div className="bg-gray-100 w-1/2 h-screen">
        <div className="relative">
          <input onChange={() => setValue(event.target.value)} placeholder="Search" className="bg-white m-[10px] p-[16px] pl-10 rounded-full placeholder:font-semibold w-[460px] placeholder:text-2xl items-center text-black" />
          <div className="absolute z-10 w-[400px] ml-4 h-fit">{filteredData.map((data, index) => {
            return (
              <div key={index} className="bg-gray-100 text-black p-2 border rounded-lg cursor-pointer" onClick={() => handleCity(index)}>{data}</div>
            )
          })}
          </div>
          {/* <div className="bg-red-500 w-[460px] h-10 rounded-lg absolute top-[66px] left-[10px]z-100"></div> */}
        </div>
        <div className="w-2/3 h-[800px] flex justify-center backdrop-blur-xl rounded-3xl m-auto relative top-1 p-8 shadow-md ">
          <p className="absolute text-gray-500">{weather?.forecast.forecastday[0].date}</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold ">{weather?.location.name}</h1>
          <img className="absolute top-48 left-14" src="/sun.svg"></img>
          <h1 className="absolute bottom-40 text-[110px] font-extrabold bg-gradient-to-b from-[#111827] to-[#cacdd1] text-transparent ... bg-clip-text">{`${weather?.forecast.forecastday[0].day.maxtemp_c}°`}</h1>
          <p className="absolute bottom-36 text-blue-800 font-semibold">Freezing fog</p>
          <div className="flex justify-between h-full w-full ">
            <img className="w-10 mt-[650px] " src="/Home.svg"></img>
            <img className="w-10 mt-[650px] " src="/User.svg"></img>
            <img className="w-10 mt-[650px] " src="/button-heart.svg"></img>
            <img className="w-10 mt-[650px] " src="/Pin.svg"></img>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-black">
        <div className=" flex justify-center w-2/3 h-[800px] backdrop-blur-xl rounded-3xl m-auto relative top-20 p-8 shadow-md ">
          <p className="absolute text-gray-500">February 10, 2025</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold text-white">Ulaanbaatar</h1>
          <img className="absolute top-48 left-14" src="/moon.svg"></img>
          <h1 className="absolute bottom-40 text-[110px] font-extrabold bg-gradient-to-b from-[#eee1e1] to-[#2f3030] text-transparent ... bg-clip-text">-25.9°</h1>
          <p className="absolute bottom-36 text-yellow-600 font-semibold">Freezing fog</p>
          <div className="flex justify-between h-full w-full ">
            <img className="w-10 mt-[650px] " src="/Home.svg"></img>
            <img className="w-10 mt-[650px] " src="/User.svg"></img>
            <img className="w-10 mt-[650px] " src="/Heart.svg"></img>
            <img className="w-10 mt-[650px] " src="/Pin.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
