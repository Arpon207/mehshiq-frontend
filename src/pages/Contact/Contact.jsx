import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="cartPage-header">
        <div>
          <h1>Contact Us</h1>
          <p>Home &gt; Contact Us</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="contacts">
          <h3>Contact Us</h3>
          <div>
            <div>
              <p>Phone</p>
              <p>+8801978-036370</p>
            </div>
            <div>
              <p>Address</p>
              <p>
                Shamsul Haque Tower, Chawk Bazar Shahi Mosque, 88-89,
                Mughaltuli, Dhaka, Bangladesh
              </p>
            </div>
            <div>
              <p>Email</p>
              <p>info.angelic08@gmail.com</p>
            </div>
            <div className="contactPage-socials">
              <p>Socials</p>
              <div>
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="userMessage">
          <h3>Send Your Question</h3>
          <form action="">
            <input type="text" name="" id="" placeholder="Your name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your message..."
              rows={8}
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
