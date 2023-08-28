import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iste
            rerum hic corrupti debitis deleniti. Nihil sequi, laudantium vitae
            repellat numquam itaque cum! Ut obcaecati deleniti numquam harum aut
            minima?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
