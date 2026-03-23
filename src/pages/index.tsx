import NavBar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import PriceCard from "@/components/PriceCard";
import {CardData} from "@/components/PriceCard";

export default function Home() {
    const cards:CardData[] = [
    {
        title: "Single Package",
        subtitle: "1hr Lesson",
        price: 50,
        hours: 1
    }
    ]

  return (
    <div className="">
      {/*<NavBar/>*/}
      {/*  <HeroCarousel/>*/}
        {cards.map((card) => (
         <PriceCard key={card.title} title={card.title} subtitle={card.subtitle} price={card.price} hours={card.hours} />
        ))}
    </div>
  );
}
