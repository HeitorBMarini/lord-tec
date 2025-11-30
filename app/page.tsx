import Banner from "./components/Banner";
import Header from "./components/Header";
import QuemSomosSection from "./components/QuemSomos";
import SectionContato from "./components/SectionContato";
import ServicosHome from "./components/ServicosHome";

export default function Home() {
  return (
    <>
    <Header />
    <Banner/>
    <QuemSomosSection/>
    <ServicosHome/>
    <SectionContato/>
    
    </>
  );
}
