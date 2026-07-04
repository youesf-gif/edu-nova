import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const [isSendPressed, setIsSendPressed] = useState(false);

  return (
    <footer className="app-footer">
      <div className="container-max">
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <Link className="footer-logo" to="/">EduNova</Link>
            <p className="footer-desc">
              Empowering learners worldwide through innovative educational technology and
              expert-led curriculum.
            </p>
            <div className="social-links">
              <a className="social-icon" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="social-icon" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="social-icon" href="#">
                <span className="material-symbols-outlined">chat</span>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 footer-links">
            <h6 className="footer-heading">Company</h6>
            <a className="footer-link" href="#">About Us</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="#">Support</a>
          </div>
          <div className="col-6 col-md-3 footer-links">
            <h6 className="footer-heading">Legal</h6>
            <a className="footer-link" href="#">Terms of Service</a>
            <a className="footer-link" href="#">Privacy Policy</a>
            <a className="footer-link" href="#">Help Center</a>
          </div>
          <div className="col-12 col-md-3 footer-newsletter">
            <h6 className="footer-heading">Newsletter</h6>
            <p className="newsletter-desc">Get the latest course updates and educational insights.</p>
            <div className="newsletter-form">
              <input className="newsletter-input" placeholder="Your email" type="email" />
              <button 
                className={`btn-newsletter ${isSendPressed ? "scale-95" : ""}`}
                onMouseDown={() => setIsSendPressed(true)}
                onMouseUp={() => setIsSendPressed(false)}
                onMouseLeave={() => setIsSendPressed(false)}
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-max footer-bottom">
        <p className="copyright">© 2024 EduNova. Empowering learners worldwide.</p>
      </div>
    </footer>
  );
}

export default Footer;
