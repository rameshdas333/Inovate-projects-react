import Appspart from "./components/Appspart";
import Bannerimg from "./components/Bannerimg";
import Features from "./components/Features";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Workpart from "./components/Workpart";
import Reviewpart from "./components/Reviewpart"
import PricingPart from "./components/PricingPart";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";




const App = () => {
  return (
    <div className=" ">
    
      <Bannerimg>
      <Navbar></Navbar>
      <Header></Header>
     </Bannerimg>
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