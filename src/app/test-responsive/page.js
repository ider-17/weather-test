export default function Home() {
    return (
        <div className="flex">
            <div className="absolute w-[940px] h-[940px] border rounded-full flex justify-center items-center border-gray-200 opacity-30 " >
                <div className="absolute w-[740px] h-[740px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[540px] h-[540px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[340px] h-[340px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[140px] h-[140px] border border-gray-200 rounded-full opacity-30 " ></div>
            </div>
            <div className="relative bg-gray-100 sm:w-1/2 sm:h-screen flex flex-col items-center ">
                <input placeholder="Search" className="absolute placeholder:text-3xl placeholder:font-bold rounded-full m-[10%] px-10 py-7 sm:w-[80%] "></input>
                <div className="relative flex justify-center items-center px-[5%] py-[10%] top-[15%] sm:w-[80%] sm:h-[75%] backdrop-blur-3xl rounded-3xl shadow-xl ">
                    <p className="absolute top-[7%] left-[10%] text-gray-500 ">February 12, 2025</p>
                    <p className="absolute top-[12%] left-[10%] text-4xl font-semibold ">Ulaanbaatar<img className="absolute -top-4 -right-7" src="/localization_icon.svg"></img></p>
                    <img className="absolute top-[25%] " src="/icon.svg"></img>
                    <p className="absolute bottom-[15%] text-[100px] font-semibold bg-gradient-to-b from-black to-white text-transparent ... bg-clip-text ">-12°</p>
                    <p className="absolute font-semibold text-l bottom-[14%] left-[10%] text-blue-600 ">Sunny</p>
                    <div className="relative bottom-[6%] flex justify-between w-full ">
                        <img className="w-10 mt-[650px] " src="/Home.svg"></img>
                        <img className="w-10 mt-[650px] " src="/User.svg"></img>
                        <img className="w-10 mt-[650px] " src="/Heart.svg"></img>
                        <img className="w-10 mt-[650px] " src="/Pin.svg"></img>
                    </div>
                </div>
            </div>

            <div className="relative bg-black sm:w-1/2 sm:h-screen flex flex-col items-center ">
                <div className="relative top-[15%] sm:w-[80%] sm:h-[75%] backdrop-blur-3xl rounded-3xl shadow-xl border "></div>
            </div>
        </div>
    )
}