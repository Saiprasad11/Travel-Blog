import Navbar from '../components/Navbar'
import Design from '../components/Design'
import img from '../images/2.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return(
        <>
        <Navbar/>
        <Design cName = "hero-mid" image = {img} title = "Contact" btnClass = "hide"  />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact