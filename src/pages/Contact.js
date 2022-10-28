import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../css/contact.css"
import ContactImage from "../images/contact.jpg"

function Contact() {
    return (
        <>
        <Navigation />
        <div className="contact-section">
          <h1>Contact</h1>  
        </div>
        <div className="contact-container">
            <div className="contact-box" id="contact-box">
                <img src={ContactImage} alt="Contact" />
            </div>
            <div className="contact-box">
                <form>
                    <input type="text" name="name" id="name" className="inputBox" required placeholder="FULLNAME" />
                    <input type="email" name="email" id="email" className="inputBox" required placeholder="EMAIL ADDRESS" />
                    <textarea className="inputBox" cols="5" rows="10" required placeholder="MESSAGE"></textarea>
                    <input type="submit" name="btns" id="btns" value="SEND MESSAGE" className="submitBTN" />
                 </form>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Contact