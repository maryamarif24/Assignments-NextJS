"use client"
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react';
import Header from '@/Components/Header/header';
import Footer from '@/Components/Footer/footer';

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}


const ClientSide = () => {
  const [data, setData] = useState<Products[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data: Products[] = await response.json();
            setData(data);
            setLoading(false);
        }
        catch (error) {
            console.log("Data not Fetched!", error);
        }
        finally {
            setLoading(false);
        }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="loader-container">
                <div className="big-circle"></div>
                <div className="small-circle"></div>
            </div>
        </div>
    );
  }

  return (
    <div>
        <Header />
    
        <div className="w-[1255px] h-[3650px] bg-black border-t border-[#A9A9A9] ">
            <h1 className="text-white text-5xl text-center pt-[20px] ">Products</h1>
            <div className="font-serif grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:px-20 ">
                {data.map((product: Products) => (
                    <div
                        key={product.id}
                        className="border-[3px] border-[#E0E0E0] hover:shadow-3xl rounded-2xl p-4 hover:border-[#67a4ff] max-w-md overflow-hidden bg-[#ffffff] mt-7"
                        >
                        <p className="text-[#a1a3a9] text-[15px] text-center">{product.category}</p>
                        <div className="h-[180px] mt-7 mb-7">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={100}
                                height={100}
                                className="mx-auto size-[180px]"
                            />
                    </div>
                    <h2 className="text-xl text-[#333333] font-semibold">
                        {product.title.slice(0, 20)}
                    </h2>
                    <p className="text-[#666666]">
                        ${product.description.slice(0, 50)}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg text-red-600 font-semibold">
                            ${product.price}
                        </span>
                        <div className="flex items-center text-yellow-500">
                            ⭐ {product.rating.rate} ({product.rating.count} reviews)
                        </div>
                    </div>
                    <button className="w-full bg-[#C084FC] hover:bg-gradient-to-r hover:from-[#7400B8] hover:via-[#ad5cfe] hover:to-[#7400B8] transition duration-300 hover:text-white font-bold py-2 mt-2 rounded-lg">
                        Add To Cart
                    </button>
                    </div>
                ))}
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default ClientSide