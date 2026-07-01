import OurMenu from "../Components/OurMenu";
import HeroSection from "../Components/HeroSection";
import WeProvide from "../Components/WeProvide";
import Event from "../Components/Event";
import CustomerSay from "../Components/CustomerSay";
function Home () {
    return (
    <div style={{marginTop:"120px"}}>

        <HeroSection />
        <OurMenu />
        <WeProvide />
        <Event />
        <CustomerSay />
    </div>
    )
}
export default Home;