import "../about/about.css"
import Me2 from "../../img/me2.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">

                </div>
                <div className="a-card">
                    <img src={Me2} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established  fact that a reader will be distracted by the redable content.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, excepturi? Non rerum deleniti alias, temporibus unde ipsa, nulla ex similique possimus sit illum cum mollitia autem consectetur, porro pariatur illo!
                </p>
                <div className="a-award">
                 <i class="fab fa-html5"></i>
                 <i class="fab fa-css3-alt"></i>
                 <i class="fab fa-js"></i>
                 <i class="fab fa-sass"></i>
                 <i class="fab fa-bootstrap"></i>
                 <i class="fab fa-react"></i>
                 <i class="fab fa-vuejs"></i>
                 <i class="fab fa-github"></i>
                </div>
            </div>
        </div>
    )
}

export default About
