import {useContext, useRef, useState} from "react"
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import github from "../../img/github.png"
import telegram from "../../img/telegram.png"
import whatsapp from "../../img/whatsapp.png"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_pyxpp9p', 
            'template_sauzhwb', 
            formRef.current,
            'user_E4YpZI29UtgQqgVYVx2kx'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-tite">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="Phone" className="c-icon" />
                            +998 94 890 08 17
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="Email" className="c-icon" />
                            umaroff2707@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="Address" className="c-icon" />
                            Uzbekistan , Tashkent
                        </div>
                    </div>
                    <div className="c-socia">
                        <a  target="_blank" href="https://www.facebook.com/umar.rahimberganov.1/" className="soc-item" rel="noreferrer">
                            <img src={facebook} alt="facebook" className="soc-img"/>
                            <h5 style={{color: darkMode && "#fff"}} className="soc-title">Umar Rahimberganov</h5>
                        </a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/umar_off27/" className="soc-item">
                            <img src={instagram} alt="instagram" className="soc-img"/>
                            <h5 style={{color: darkMode && "#fff"}} className="soc-title">@umar_off27</h5>
                        </a>
                        <a rel="noreferrer" target="_blank"  href="https://wa.me/+998948900817" className="soc-item">
                            <img src={whatsapp} alt="whatsapp" className="soc-img"/>
                            <h5 style={{color: darkMode && "#fff"}} className="soc-title">+998 94 890 08 17</h5>
                        </a>
                        <a rel="noreferrer" target="_blank"  href="https://t.me/dev7707" className="soc-item">
                            <img src={telegram} alt="telegram" className="soc-img"/>
                            <h5 style={{color: darkMode && "#fff"}} className="soc-title">@dev7707</h5>
                        </a>
                        <a rel="noreferrer" target="_blank"  href="https://github.com/umar2707" className="soc-item">
                            <img src={github} alt="github" className="soc-img"/>
                            <h5 style={{color: darkMode && "#fff"}} className="soc-title">@umar2707</h5>
                        </a>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story</b> Get in touch. Always available for freelancing if the right project comes along me. 
                    </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} rows="5" placeholder="Message" name="message"  />
                        <button >Submit</button>
                        {done && "Thank you.."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
