import Footer from "@/components/Footer/Footer";
import PopularBrands from "@/components/ListOfBrand/ListOfBand";
import HeroBanner from "@/components/Review/Herobanner";
import Quality from "@/components/Review/Quality";
import ReviewComponent from "@/components/Review/Review";
import Searchbar from "@/components/SearchBar/Searchbar";
import SearchByCatCard from "@/components/SearchBar/SearchByCat/SearchByCatCard";
import SearchByname from "@/components/SearchBar/SearchBYname/SearchByname";
import SliderMainpge from "@/components/Slider/SliderMainpage";
import Image from "next/image";

export default function Home() {
  return (
 <>

 <Searchbar/>
 <SliderMainpge/>
 <SearchByname/>
<PopularBrands/>

<SearchByCatCard/>
<HeroBanner/>
<Quality/>
<ReviewComponent/>
<Footer/>
 </>
  );
}
