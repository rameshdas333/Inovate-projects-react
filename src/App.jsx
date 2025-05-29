import Appspart from "./components/AppSpart";
import Features from "./components/Features";
import Header from "./components/Header";
import BannerImg from "./components/BannerImg"
import Platform from "./components/PlatForm";
import Workpart from "./components/WorkPart";
import Reviewpart from "./components/ReviewPart"
import PricingPart from "./components/PricingPart";
import Aboutus from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUsSlider from "./components/AboutUsSlider";




const App = () => {
  return (
    <div className=" ">
    
    <BannerImg>
       <Navbar></Navbar>
      <Header></Header>
    </BannerImg>

       <Platform></Platform>
       <Features></Features>
       <Appspart></Appspart>
       <Workpart></Workpart>
       
            <Reviewpart></Reviewpart> 
            <PricingPart></PricingPart>
            <Aboutus></Aboutus>
         
            <Footer></Footer>
      
     
       
       
     
      
   
    </div>
  );
};

export default App;