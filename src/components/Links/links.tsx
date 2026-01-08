import fbIcon from "../../assets/facebook.png";
import './links.css';
function Footer() {
  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/Collins Kipkirui Koech-104955064956703/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="footer">
      <p id="fbConnect">Connect with me on Facebook:</p>
      <img
        src={fbIcon}
        alt="Facebook"
        className="social-icon"
        onClick={openFacebook}
        style={{ cursor: "pointer" }}
      />
    </footer>
  );
}

export default Footer;
