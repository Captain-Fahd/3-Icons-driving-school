import Image from "next/image";

const slides = [
    { src: "https://picsum.photos/seed/slide1/1600/900", alt: "Slide 1" },
    { src: "https://picsum.photos/seed/slide2/1600/900", alt: "Slide 2" },
    { src: "https://picsum.photos/seed/slide3/1600/900", alt: "Slide 3" },
];

const HeroCarousel = () => (
    <div className="position-relative" style={{ height: "65vh" }}>
        <div id="hero-carousel" className="carousel slide carousel-fade h-100"
             data-bs-ride="carousel">
            <div className="carousel-inner h-100">
                {slides.map((slide, i) => (
                    <div key={i} className={`carousel-item h-100 ${i === 0 ? "active" : ""}`} data-bs-interval="4000">
                        <Image src={slide.src} fill style={{ objectFit: "cover", filter: "brightness(0.35)" }} alt={slide.alt} />
                    </div>
                ))}
            </div>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100" style={{ zIndex: 10 }}>
            <h1 className="fw-bold">Learn to Drive with Confidence</h1>
        </div>
    </div>
);

export default HeroCarousel;