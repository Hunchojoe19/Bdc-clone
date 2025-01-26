import Footer from "./components/Footer"
import ContactForm from "./pages/ContactUs"
import Header from "./pages/Header"
import Hero from "./pages/Hero"
import NewsSubscription from "./pages/NewsSubcription"
import PriceStats from "./pages/PriceStats"
import Testimonials from "./pages/Testimonials"
import Web3Gateway from "./pages/Web3Gateway"


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="pt-[4.5rem]">

      <Hero/>
      <PriceStats/>
      <Testimonials/>
      <Web3Gateway/>
      <NewsSubscription/>
      <ContactForm/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
