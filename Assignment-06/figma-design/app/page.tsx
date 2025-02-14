import Header from "@/Components/Header/header";
import Hero from "@/Components/Hero/hero";
import Images from "@/Components/Image/image";
import Logo from "@/Components/Logo4/logo";
import Explore from "@/Components/Explore/explore";
import Achievement from "@/Components/Achievements/achievement";
import Courses from "@/Components/Courses/courses";
import Team from "@/Components/Team/team";
import Test from "@/Components/Testimonials/testimonials";
import Footer from "@/Components/Footer/footer";



export default function Home() {
  return (
    <div className="md:w-[1280px] md:h-[7686px]">
      <Header/>

      <div className="md:flex md:w-[1280px] md:h-[800px]">
        <Hero/>
        <Images/>
      </div>

      <Logo/>
      <Explore/>
      <Achievement/>
      <Courses/>
      <Team/>
      <Test/>
      <Footer/>
    </div>
  );
}
