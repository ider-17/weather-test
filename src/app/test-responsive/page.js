export default function Home() {
    return (
        <div className="flex justify-center items-center">
            <div className="absolute w-[940px] h-[940px] border rounded-full flex justify-center items-center border-gray-200 opacity-30 " >
                <div className="absolute w-[740px] h-[740px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[540px] h-[540px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[340px] h-[340px] border border-gray-200 rounded-full opacity-30 " ></div>
                <div className="absolute w-[140px] h-[140px] border border-gray-200 rounded-full opacity-30 " ></div>
            </div>
            <div className="relative bg-gray-100 sm:w-1/2 sm:h-screen flex flex-col items-center ">
                <img className="absolute top-[3%] left-[3%] " src="/Group 2.svg"></img>
                <input placeholder="Search" className="absolute placeholder:text-2xl placeholder:font-semibold rounded-full m-7 px-10 py-2 sm:w-[75%] "></input>
                <div className="relative flex justify-center items-center px-[5%] py-[10%] top-[15%] sm:w-[80%] sm:h-[75%] backdrop-blur-3xl rounded-3xl shadow-xl ">
                    <p className="absolute top-[7%] left-[10%] text-gray-500 ">February 12, 2025</p>
                    <p className="absolute top-[12%] left-[10%] text-4xl font-semibold ">Ulaanbaatar<img className="absolute -top-4 -right-7" src="/localization_icon.svg"></img></p>
                    <img className="absolute top-[15%] w-[50%] h-[50%] " src="/icon.svg"></img>
                    <p className="absolute bottom-[15%] text-[100px] font-semibold bg-gradient-to-b from-black to-white text-transparent ... bg-clip-text ">-12°</p>
                    <p className="absolute font-semibold text-l bottom-[14%] left-[10%] text-yellow-500 ">Sunny</p>
                    <div className="absolute top-[87%] flex justify-between px-5 w-full ">
                        <img className="w-10 " src="/Home.svg"></img>
                        <img className="w-10 " src="/User.svg"></img>
                        <img className="w-10 " src="/Heart.svg"></img>
                        <img className="w-10 " src="/Pin.svg"></img>
                    </div>
                </div>
                <div className="absolute top-[156.5px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black z-[2]"></div>
                <div className="absolute w-[50px] h-[60px] top-[150px] left-[80px] bg-gray-100 z-[1] "></div>
                <div className="absolute top-[-59px] left-[100px] rounded-tl-[50%] w-[100px] h-[100px] bg-black rotate-[-90deg] z-[2]"></div>
            </div>

            <div className="relative bg-black sm:w-1/2 sm:h-screen flex flex-col items-center ">
                <img className="absolute bottom-[5%] right-[3%] " src="/Ellipse 22.svg"></img>
                <div className="relative flex justify-center items-center px-[5%] py-[10%] top-[15%] sm:w-[80%] sm:h-[75%] backdrop-blur-3xl rounded-3xl shadow-xl ">
                    <p className="absolute top-[7%] left-[10%] text-gray-500 ">February 12, 2025</p>
                    <p className="absolute top-[12%] left-[10%] text-4xl text-white font-semibold ">Ulaanbaatar<img className="absolute -top-4 -right-7" src="/localization_icon.svg"></img></p>
                    <img className="absolute top-[15%] w-[50%] h-[50%]" src="/icon (1).svg"></img>
                    <p className="absolute bottom-[15%] text-[100px] font-semibold bg-gradient-to-b from-black to-white text-transparent ... bg-clip-text ">-12°</p>
                    <p className="absolute font-semibold text-l bottom-[14%] left-[10%] text-blue-600 ">Sunny</p>
                    <div className="absolute top-[87%] flex justify-between px-5 w-full ">
                        <img className="w-10 " src="/Home.svg"></img>
                        <img className="w-10 " src="/User.svg"></img>
                        <img className="w-10 " src="/Heart.svg"></img>
                        <img className="w-10 " src="/Pin.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}