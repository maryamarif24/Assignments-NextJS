import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";

export default function Explore () {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <Header></Header>
            <h1 className="pt-[100px] font-sans text-4xl font-extrabold mx-[580px]">Explore</h1>
            <div className="flex mx-[130px] m-[20px]">
                <p className="bg-[url('/Images/australia.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Australia</p>
                <p className="bg-[url('/Images/Pakistan.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Pakistan</p>
                <p className="bg-[url('/Images/Paris.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Paris</p>
            </div>

            <div className="flex mx-[150px] m-[20px]">
                <p className="bg-[url('/Images/Maldives.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Maldives</p>
                <p className="bg-[url('/Images/Italy.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Italy</p>
                <p className="bg-[url('/Images/Dubai.PNG')] p-[100px] m-[20px] mt-[30px] rounded-xl hover:text-white font-bold text-2xl">Dubai</p>
            </div>
            <Footer></Footer>
        </div>
    )
}