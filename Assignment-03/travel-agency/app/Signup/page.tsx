import Header from "../Components/Header/header"
import Footer from "../Components/Footer/footer"

export default function Signup () {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Header></Header>
            <div className="pt-[150px] mb-[100px]">
                <h1 className="font-extrabold font-sans text-4xl mx-[530px]">Sign Up</h1>
                <form action="">
                    <input type="text" placeholder="Name" className="p-[10px] rounded-2xl pl-[30px] px-[400px] mx-[280px] border-2 border-zinc-950 my-2"/>
                    <input type="text" placeholder="Email" className="p-[10px] rounded-2xl pl-[30px] px-[400px] mx-[280px] border-2 border-zinc-950 my-2"/>
                    <input type="text" placeholder="Password" className="p-[10px] rounded-2xl pl-[30px] px-[400px] mx-[280px] border-2 border-zinc-950 my-2"/>
                    <button className="bg-slate-900 text-white font-bold  p-4 px-[240px] rounded-full mx-[320px] hover:text-slate-900 hover:bg-red-500">Sign Up</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}