import React from 'react'
import Header from '@/Components/Header/header';
import Footer from '@/Components/Footer/footer';

interface Server {
    id: number;
    name: string;
    type: string;
    available: boolean;
}

const ServerSide = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const server : Server[] = await response.json();
    return (
        <div>
            <Header />

            <div className="w-[1255px] h-[500px] bg-black border-t border-[#A9A9A9]  ">
                <h1 className="text-white text-5xl text-center pt-[20px] ">Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-32 mt-[25px] font-serif ">
                    {server.map((servers: Server) => (
                        <div
                        key={servers.id}
                        className="border-[3px] border-rose-800 hover:shadow-3xl rounded-lg p-4 hover:border-blue-600 max-w-md overflow-hidden bg-white"
                        >
                        <h2 className="text-[24px] text-center font-semibold text-indigo-600 uppercase text-shadow-md">
                            {servers.name}
                        </h2>
                        <p className="text-gray-600 my-2 mt-4 text-[15px]">
                            <strong>Type:</strong> {servers.type}
                        </p>
                        <p
                            className={`font-semibold ${
                            servers.available ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {servers.available ? "You can Avail" : "Sorry unavailable"}
                        </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ServerSide