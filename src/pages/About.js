import Navigation from "../components/Navigation";
import AboutImage from "../images/about.jpg"
import "../css/about.css"
function About() {
  return (
    <>
      <Navigation />
      <div className="about-section">
        <h1>ABOUT</h1>
      </div>
      <div className="about">
        <div className="box-about">
          <img src={AboutImage} alt="About" />
        </div>
        <div className="box-about">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
