import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"

export default function Profile () {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Header></Header>
            <div className="pt-[150px] mb-[100px]">
                <h1 className="font-extrabold font-sans text-4xl mx-[550px] hover:text-red-500">Profile</h1>
                <div>
                    <div className="flex pl-[380px] pt-[50px] pr-[100px] m-[60px] border-2 border-zinc-950 rounded-2xl">
                        <div className="text-9xl">
                            <p className="fa fa-user bg-slate-900 rounded-full p-[30px] text-white hover:bg-red-500 hover:text-slate-900"></p>
                        </div>
                        <div className="text-2xl font-bold font-sans p-[50px]">
                            <p>Your Name:</p>
                            <p>Your Email:</p>
                            <p>Your Phone Number:</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}