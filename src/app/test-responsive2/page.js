export default function Home() {
    return (
        <div className="box-border">
            <div className=""></div>
            <div className="relative w-full bg-gray-100 h-screen flex justify-center ">
                <img className="absolute top-7 left-5 w-[100px] " src="/bg-sun.svg"></img>
                <div>
                    <input className="absolute w-[200px] py-2 px-5 top-5 left-5 rounded-full " placeholder="Search" />
                </div>
                <div className="relative w-[300px] backdrop-blur-xl p-5 rounded-3xl top-16 h-[440px] shadow-xl ">
                    <img className="absolute top-[100px] left-[90px] w-[130px] " src="/sun.svg"></img>
                    <p className="text-gray-500">February 12, 2025</p>
                    <h3 className="text-3xl font-semibold">Ulaanbaatar
                        <img className="mx-[200px] my-[-50px] " src="/localization_icon.svg"></img>
                    </h3>
                    <h1 className="absolute bottom-[70px] text-[100px] font-semibold bg-gradient-to-b from-black to-white text-transparent ... bg-clip-text ">-12°</h1>
                    <p className="absolute bottom-[70px] text-yellow-500 ">Sunny</p>
                    <div className="absolute bottom-[30px] flex justify-between w-[260px] ">
                        <img className="w-7 " src="/Home.svg"></img>
                        <img className="w-7 " src="/User.svg"></img>
                        <img className="w-7 " src="/button-heart.svg"></img>
                        <img className="w-7 " src="/Pin.svg"></img>
                    </div>
                </div>
                <div className="absolute bottom-[-50px] bg-gray-100 rounded-full w-[100px] h-[100px] flex justify-center items-center gap-[5px] ">
                    <img className="w-[30px] h-[80px] " src="/pinecone-logo-half.svg"></img>
                    <img className="w-[30px] h-[80px] rotate-[180deg] " src="/pinecone-logo-half.svg"></img>
                </div>
            </div>

            <div className="w-full bg-black h-screen"></div>
        </div>
    )
}