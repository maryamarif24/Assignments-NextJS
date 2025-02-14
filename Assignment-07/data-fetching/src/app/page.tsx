import Header from "@/Components/Header/header";
import Footer from "@/Components/Footer/footer";

export default function Home() {
  return (
    <div className="data-fetching max-md:w-[768px] ">
      <Header />

      <div className="h-[500px] max-md:w-[768px] ">
          <div className="w-[1255px] text-center text-rose-700 max-md:w-[768px] ">
            <h1 className="text-6xl pt-[100px] max-md:text-4xl ">Data-Fetching Assignment</h1>
            <h2 className="text-4xl text-lime-800 pt-[20px] max-md:text-2xl ">By Maryam Arif</h2>
          </div>
          <div className="w-[1255px] text-center gap-[20px] mt-[50px] max-md:w-[768px] ">
            <a href="/ClientSide" className="w-[600px] h-[80px] border-2 p-[20px] px-[40px] rounded-lg text-[20px] hover:text-white hover:bg-red-600 border-black hover:border-white font-serif mr-[40px] ">Client Side</a>
            <a href="/ServerSide" className="w-[600px] h-[80px] border-2 p-[20px] px-[40px] rounded-lg text-[20px] hover:text-white hover:bg-red-600 border-black hover:border-white font-serif ">Server Side</a>
          </div>
      </div>

      <Footer />
    </div>
  );
}
