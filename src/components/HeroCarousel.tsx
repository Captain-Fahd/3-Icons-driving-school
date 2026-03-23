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
        <div id="hero-overlay" className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 justify-content-center">
            <h1 className="fw-bold ">Driving you to success</h1>
            <div className="hero-btns">
                <button className="btn pricing-btn" style={{ color: "lightgray", borderColor: "lightgray", width: "95px"}}>Pricing</button>
                <button className="btn btn-danger">Book Now</button>
            </div>
        </div>
    </div>
);

export default HeroCarousel;