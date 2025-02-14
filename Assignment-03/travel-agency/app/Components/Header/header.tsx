import Image from "next/image"
export default function Navbar () {
    return (
        
        <div>
            <header className="header bg-slate-900 fixed w-full">
                
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <nav className="max-md:hidden container ml-2 mr-2  justify-between items-center text-center flex text-white">
                    <div className="block w-3/6 pl-2 m-0">
                        <h1 className="text-3xl font-extrabold p-0 mr-6 ml-[20px] mt-[10px] text-red-600 hover:text-white">TravelHeights</h1>
                        <p className="text-1x2 mx-[20px] mb-[10px]">Travel the World with us!</p>
                    </div>

                    <ul className="flex space-x-0 justify-items-center">
                
                        <div className="flex font-bold justify-between mt-7">
                            <li>
                                <a href="/Travel" className="p-10 hover:text-red-500 ease-in duration-300 ...">Travel</a>
                            </li>
                            <li>
                                <a href="/Explore" className="p-10 hover:text-red-500 transition duration-700 ease-in-out">Explore</a>
                            </li>
                            <li>
                                <a href="/" className="p-10 hover:text-red-500 transition duration-700 ease-in-out">Home</a>
                            </li>
                            <li>
                                <a href="/Services" className="p-10 hover:text-red-500 transition duration-700 ease-in-out">Services</a>
                            </li>
                            <li>
                                <a href="/Signup" className="p-10 hover:text-red-500 transition duration-700 ease-in-out">SignIn</a>
                            </li>
                            <li>
                            <a href="/Login" className="p-10 hover:text-red-500 mt-10 transition duration-700 ease-in-out">Login</a>
                            </li>
                            
                        </div>

                        <div className="flex font-bold m-1">
                            <li>
                            <a href="/Profile" target="_blank" className="mt-0 fa fa-user p-[30px] hover:text-red-500"></a>
                            </li>
                        </div>

                    </ul>
                </nav>
                <nav className="md:hidden w-[100px] h-[100px] pt-[35px] ">
                    <Image
                        src="/Images/menu-white.jpg"
                        alt="Menu"
                        width={30}
                        height={30}
                    />
                </nav>
            </header>

        </div>
    )
}