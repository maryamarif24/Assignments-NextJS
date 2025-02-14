import Image from "next/image";
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"


export default function Home() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <Header></Header>

      <div className="flex bg-[url('/Images/bg.jpg')] bg-no-repeat bg-cover h-[610px]">
                
        <div className="h-[100%] w-[100px] text-white text-center py-[150px] fixed">

            <a href="#" className="fa fa-facebook p-[20px] hover:text-slate-900 bg-slate-900 m-3 rounded-3xl hover:bg-red-500"></a>
            <a href="#" className="fa fa-twitter p-[20px] hover:text-slate-900 bg-slate-900 m-3 rounded-3xl hover:bg-red-500"></a>
            <a href="#" className="fa fa-instagram p-[20px] hover:text-slate-900 bg-slate-900 m-3 rounded-3xl hover:bg-red-500"></a>
            <a href="#" className="fa fa-linkedin p-[20px] hover:text-slate-900 bg-slate-900 m-3 rounded-3xl hover:bg-red-500"></a>
        </div>

        <div className=" p-[100px]">
          <h1 className="m-6 mt-[140px] text-7xl font-extrabold text-red-500 font-sans hover:text-slate-900 mx-[110px] text-center">Wonderful Experience</h1>
            <p className="m-0 text-xl mx-[160px] font-thin text-slate-900 font-sans text-center">The customer is very important, the customer will be followed 
            by the customer.</p>
          <button className="ml-[450px] bg-red-500 hover:bg-slate-900 hover:text-red-500 text-white font-bold p-3 mt-[20px] rounded-2xl text-center">Learn More</button>
                    
          <div className="mx-[500px] my-[80px]">
            <Image
                src="/Images/scrdwn.png"
                alt="Image"
                width={40}
                height={40}
            />
          </div>

        </div>

      </div>

      <div className="bg-slate-900 text-white p-[20px]">
                
        <div>
            <h1 className="text-center text-4xl font-extrabold font-sans hover:text-red-500 mt-10">Explore the world</h1>
            <p className="text-center text-1xl font-sans font-thin mx-[100px] pb-[20px] text-slate-400">The World is with You, and You are with the world! 
                Don t Let anything stop you from exploring the beauty spread around you.
            </p>
        </div>

        <div className="flex m-[20px]">
            
            <div className="bg-[url('/Images/australia.png')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Australia</h1>
            </div>

            <div className="bg-[url('/Images/Maldives.PNG')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Maldives</h1>
            </div>

            <div className="bg-[url('/Images/Dubai.PNG')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Dubai</h1>
            </div>

            <div className="bg-[url('/Images/Italy.PNG')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Italy</h1>
            </div>

        </div>

        <div className="flex m-[20px]">
            
            <div className="bg-[url('/Images/Pakistan.PNG')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Pakistan</h1>
            </div>

            <div className="bg-[url('/Images/Paris.PNG')] pt-[200px] px-[80px] w-1/4 rounded-2xl origin-center mx-[10px]">
                <h1 className="text-2xl font-bold font-serif hover:text-red-500">Paris</h1>
            </div>


        </div>

      </div>

      <div className="bg-white p-[20px] m-[10px]">
          <h1 className="font-extrabold text-3xl mx-[500px]">Why Us?</h1>
          <p className="font-thin text-1xl font-sans mx-[260px] mb-[40px]">Our team is passionate about creating unique and memorable experiences for our customers.</p>

          <div className="flex">
              <div className="bg-red-500 p-[30px] mx-[20px] rounded-2xl text-2xl font-bold font-sans text-white hover:bg-slate-900 ">
                  <h1>We are based all over the world</h1>
              </div>
              <div className="bg-red-500 p-[30px] mx-[20px] rounded-2xl text-2xl font-bold font-sans text-white hover:bg-slate-900 ">
                  <h1>Travel the world, Without Thinking</h1>
              </div>
              <div className="bg-red-500 p-[30px] mx-[20px] rounded-2xl text-2xl font-bold font-sans text-white hover:bg-slate-900 ">
                  <h1>Get to know about local cultures</h1>
              </div>
              <div className="bg-red-500 p-[30px] mx-[20px] rounded-2xl text-2xl font-bold font-sans text-white hover:bg-slate-900 ">
                  <h1>Have your best experience</h1>
              </div>
          </div>

      </div>

      <div className="flex bg-slate-900 text-white pl-[100px] py-[100px]">
          <div>
              <h1 className="font-extrabold text-4xl p-10 ">Book your Travel Today</h1>
              <p className="text-slate-400 px-[40px] mb-4">Give yourself and your family a peaceful and wonderful vacation this holiday!</p>
              <button className="bg-white text-slate-900 p-[14px] rounded-3xl px-[20px] mx-[40px] hover:bg-slate-400 font-bold hover:text-white">Book Now</button>
          </div>
          <div className="bg-[url('/Images/booknow.png')] w-full">
          </div>
      </div>

      <div className="border-3 border-zinc-950 m-[100px]">
          <h2 className="font-extrabold text-2xl mx-[430px]">Contact Us</h2>
          <form action="">
              <input type="text" placeholder="Name" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2"/>
              <input type="text" placeholder="Email" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2"/>
              <input type="number" placeholder="Phone Number" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2"/>
              <input type="text" placeholder="Message" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2 py-10"/>
              <button className="bg-slate-900 text-white font-bold  p-4 px-[340px] rounded-full mx-[110px] hover:text-slate-900 hover:bg-red-500">Send Message</button>
          </form>
      </div>

      <Footer></Footer>
    </div>
  );
}
