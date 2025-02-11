
export default function Home() {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="absolute w-[940px] h-[940px] border rounded-full flex justify-center items-center border-gray-200 " >
        <div className="absolute w-[740px] h-[740px] border border-gray-200 rounded-full " ></div>
        <div className="absolute w-[540px] h-[540px] border border-gray-200 rounded-full " ></div>
        <div className="absolute w-[340px] h-[340px] border border-gray-200 rounded-full " ></div>
        <div className="absolute w-[140px] h-[140px] border border-gray-200 rounded-full " ></div>
      </div>
      <img className="absolute top-[3%] left-[3%] " src="/Group 2.svg"></img>
      <img className="absolute bottom-[10%] right-[3%] " src="/Ellipse 22.svg"></img>
      <div className="flex justify-center absolute w-[200px] h-[200px] ">
        <div className=" w-[140px] self-center z-[1] h-[140px] items-center flex justify-center rounded-full bg-gray-100">
          <img className="w-[50px] h-[80px]" src="/Group 4.svg"></img>
          <img className="rotate-180 w-[50px] h-[80px]" src="/Group 4.svg"></img>
        </div>
        <div className="absolute top-[156.5px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black z-[2]"></div>
        <div className="absolute w-[50px] h-[60px] top-[150px] left-[80px] bg-gray-100 z-[1] "></div>
        <div className="absolute top-[-59px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black rotate-[-90deg] z-[2]"></div>
        <div className="absolute w-[50px] h-[60px] top-[-10px] left-[80px] bg-gray-100 z-[1] "></div>
      </div>
      <div className="bg-gray-100 w-1/2 h-screen">
        <input placeholder="Search" className=" relative bg-white m-[10px] p-[16px] pl-10 rounded-full placeholder:font-semibold w-[460px] placeholder:text-2xl" />
        <div className="w-2/3 h-[800px] backdrop-blur-xl rounded-3xl m-auto relative top-1 p-8 shadow-md ">
          <p className="absolute text-gray-500">February 10, 2025</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold ">Ulaanbaatar</h1>
          <img className="absolute top-48 left-14" src="/icon.svg"></img>
          <h1 className="absolute bottom-40 text-[110px] font-extrabold bg-gradient-to-b from-[#111827] to-[#cacdd1] text-transparent ... bg-clip-text mx-10">-12°</h1>
          <p className="absolute bottom-36 text-blue-800 font-semibold">Freezing fog</p>
          <img className="absolute bottom-16" src="/Home.svg"></img>
          <img className="absolute bottom-16 right-10" src="/User.svg"></img>
          <img className="absolute bottom-16 right-32" src="/Heart.svg"></img>
          <img className="absolute bottom-16 left-32" src="/Pin.svg"></img>
        </div>
      </div>
      <div className="w-1/2 h-screen bg-black">
        <div className="w-2/3 h-[800px] backdrop-blur-xl rounded-3xl m-auto relative top-20 p-8 shadow-md ">
          <p className="absolute text-gray-500">February 10, 2025</p>
          <img className="absolute top-12 right-8" src="/localization_icon.svg"></img>
          <h1 className="absolute top-14 text-5xl font-bold text-white">Ulaanbaatar</h1>
          <img className="absolute top-48 left-14" src="/icon (1).svg"></img>
          <h1 className="absolute bottom-40 text-[110px] font-extrabold bg-gradient-to-b from-[#eee1e1] to-[#505256] text-transparent ... bg-clip-text mx-10">-25.9°</h1>
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
