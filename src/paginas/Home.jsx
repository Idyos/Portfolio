import SocialIcon from "../components/SocialIcon";
import "./home.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


function Home({reference}) {
 

  return (
    <section className="one">
      <p className="j" ref={reference}>J</p>
      <div className="line"></div>
      <div className="info">
        <div className="imagewrapper">
          <div className="frame">
            <img src={require('../portfolio/profilepicture/Foto 1 final.jpg')} alt="My Face"/>
          </div>
        </div>
        <h1 className="hi">Hi!</h1>
        <p className="name">I'm Javi Gauxachs Monserrat</p>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget malesuada magna, in auctor felis. Donec et ipsum sapien.
        </p>
      </div>
      <div className="island">
        <h1 /*style="background: transparent"*/>A</h1>
      </div>
      <div className="socials">
        <SocialIcon icon={faYoutube} press='https://www.youtube.com/channel/UCC8GWZ6jBvk2XbgvV22ySgA'/>
        <SocialIcon icon={faTwitter} press='https://twitter.com/javiGAMO_'/>
        <SocialIcon icon={faInstagram} press='https://www.instagram.com/javigauxachs'/>
        <SocialIcon icon={faLinkedinIn} press='https://www.linkedin.com/in/javigauxachsmonserrat/'/>
      </div>
    </section>
  );
}

export default Home;
