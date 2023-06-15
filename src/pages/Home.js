import Navbar from '../components/Navbar'
import Destination from '../components/Destination'
import Footer from '../components/Footer'
import img from '../images/sai.jpg'
import Design from '../components/Design'

const Home = () => {
    return(
        <>
        <Navbar/>
        <Design 
        cName = "hero"
        image = {img}
        title = "Your Journey Your Story"
        text = {<i>Not all those who wander are lost</i>}
        buttonText = "Travel Plan"
        url = "/"
        btnClass = "hide"  
        />
        <Destination/>
        <Footer/>
        </>
    )
}

export default Home