import "./footer.css";
import logoWhite from "../../assets/Logo_white.svg";

const Footer = () => {
  return (
    <footer className="lemon__footer footer__padding section__padding">
      {/* Logo */}
      <div className="lemon__footer-logo">
        <img src={logoWhite} alt="Little Lemon" />
      </div>

      {/* About */}
      <div className="lemon__footer-about text__padding">
        <h4>Reach out to us</h4>
        <div className="lemon__footer-about_sections">
          <h5>Address:</h5>
          <p>
            Little Lemon Restaurant <br />
            123 Main Street <br />
            Anytown, USA 12345
          </p>
        </div>

        <div className="lemon__footer-about_sections ">
          <h5>Email Address:</h5>
          <p>
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </p>
        </div>

        <div className="lemon__footer-about_sections">
          <h5>Phone Number:</h5>
          <p>
            <a href="tel:+5551234567">(555) 123-4567</a>
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="lemon__footer-links text__padding">
        <h4>Get to know us</h4>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#careers">Careers</a>
        </p>
        <p>
          <a href="#press">Press Releases</a>
        </p>
        <p>
          <a href="#recipes">Exclusive Recipes</a>
        </p>
        <p>
          <a href="#kitchen">Our Kitchen</a>
        </p>
      </div>

      {/* Social Media */}
      <div className="lemon__footer-social text__padding">
        <h4>Connect with us</h4>
        <p>
          <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
        <p>
          <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p>
          <a className="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
