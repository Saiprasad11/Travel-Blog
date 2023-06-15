import Navbar from '../components/Navbar'
import Design from '../components/Design'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import img from '../images/night.jpg'

const About = () => {
    return(
        <>
        <Navbar/>
        <Design cName = "hero-mid" image = {img} title = "About" btnClass = "hide"  />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About