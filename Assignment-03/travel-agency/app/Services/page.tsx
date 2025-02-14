import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"

export default function Services () {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Header></Header>
            <h1 className="font-extrabold pt-[130px] p-[20px] mx-[550px] hover:text-red-500 text-4xl font-sans text-center">Services</h1>
            <div className="flex mt-[40px]">
                <p className="bg-slate-900 rounded-2xl text-white p-[50px] m-[10px] hover:text-slate-900 hover:bg-red-500 font-bold text-center mb-[100px]">We are based all over the world</p>
                <p className="bg-slate-900 rounded-2xl text-white p-[50px] m-[10px] hover:text-slate-900 hover:bg-red-500 font-bold text-center mb-[100px]">Travel the world, Without Thinking</p>
                <p className="bg-slate-900 rounded-2xl text-white p-[50px] m-[10px] hover:text-slate-900 hover:bg-red-500 font-bold text-center mb-[100px]">Get to know about local cultures</p>
                <p className="bg-slate-900 rounded-2xl text-white p-[50px] m-[10px] hover:text-slate-900 hover:bg-red-500 font-bold text-center mb-[100px]">Have your best experience</p>
            </div>
            <Footer></Footer>
        </div>
    )
}