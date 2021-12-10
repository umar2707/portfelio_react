import "./intro.css"
import Me from "../../img/me.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";


const Intro = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Umar Rakhimberganov</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Photagrapher</div>
                            <div className="i-title-item">Web Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design  and  develop services for  customer off all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </p>
                    <svg class="arrows" >
							<path style={{stroke: darkMode && "#fff"}} class="a1" d="M0 0 L30 32 L60 0"></path>
							<path style={{stroke: darkMode && "#fff"}} class="a2" d="M0 20 L30 52 L60 20"></path>
							<path style={{stroke: darkMode && "#fff"}} class="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">

                </div>
               <img src={Me} alt="i" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
