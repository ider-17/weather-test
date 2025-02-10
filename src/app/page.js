
export default function Home() {
  return (
    <div className="w-full flex">
      <img className="absolute top-[450px] left-[510px] z-[1] bg-white" src="/Group 4.svg"></img>
      <div className="bg-gray-100 w-1/2 h-screen">
        <input placeholder="Search" className="bg-white m-[10px] p-[16px] pl-10 rounded-full placeholder:font-semibold w-[460px] placeholder:text-2xl" />
        <div className="w-2/3 h-[800px] bg-white rounded-3xl m-auto relative top-1 p-8">
          <p className="absolute text-gray-500">February 10, 2025</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold ">Ulaanbaatar</h1>
          <img className="absolute top-48 left-14" src="/icon.svg"></img>
          <h1 className="absolute bottom-48 text-6xl font-bold text-gray-600">-12</h1>
          <p className="absolute bottom-36 text-blue-800 font-semibold">Freezing fog</p>
          <img className="absolute bottom-16" src="/Home.svg"></img>
          <img className="absolute bottom-16 right-10" src="/User.svg"></img>
          <img className="absolute bottom-16 right-32" src="/Heart.svg"></img>
          <img className="absolute bottom-16 left-32" src="/Pin.svg"></img>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-black">
        <div className="w-2/3 h-[800px] bg-black rounded-3xl m-auto relative top-20 p-8">
          <p className="absolute text-gray-500">February 10, 2025</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold text-white">Ulaanbaatar</h1>
          <img className="absolute top-48 left-14" src="/icon (1).svg"></img>
          <h1 className="absolute bottom-48 text-6xl font-bold text-gray-500">-25.9</h1>
          <p className="absolute bottom-36 text-yellow-600 font-semibold">Freezing fog</p>
          <img className="absolute bottom-16" src="/Home.svg"></img>
          <img className="absolute bottom-16 right-10" src="/User.svg"></img>
          <img className="absolute bottom-16 right-32" src="/Heart.svg"></img>
          <img className="absolute bottom-16 left-32" src="/Pin.svg"></img>
        </div>
      </div>
    </div>
  );
}
