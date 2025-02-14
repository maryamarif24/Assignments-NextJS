import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer";


export default function Travel () {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Header></Header>
            
            <div className="p-[100px] justify-center bg-[url('/Images/p1.PNG')] h-[600px] bg-no-repeat bg-cover">
                <h1 className="font-extrabold text-4xl p-7 mx-[450px] font-sans hover:text-white">Travel</h1>
                <p className="font-bold text-white text-xl p-1 font-sans ">Travel is the movement of people between distant geographical locations. Travel fast and secure with TRAVELHEIGHTS, experiencing life-time memories with your loved ones!</p>
                <p className="font-bold text-white text-xl p-1 font-sans ">Expressing love and affection through trips to your loved ones favourite places.</p>
                <p className="font-bold text-white text-xl p-1 font-sans ">We offer to you a wholesome variety of Packages that are pocket-friendly; fulfilling the need of both enjoyment and carrying out on your budget at the same time!</p>
                <p className="font-bold text-white text-xl p-1 font-sans ">So Book your Travel Now!</p>
            </div>

            <Footer></Footer>
        </div>
    )
}