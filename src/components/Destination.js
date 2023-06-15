import "./Destination.css"
import DestinationData from "./DestinationData"
import img1 from '../images/a.jpg'
import img2 from '../images/b.jpg'
import img3 from '../images/d.jpg'
import img4 from '../images/e.jpg'
import img5 from '../images/f.jpg'
import img6 from '../images/g.jpg'

const Destination = () => {
    return(
        <>
        <div className="destination">
            <h1>Highlights</h1>
            <p>Tours give you the oppurtunity to fulfill the Dreams</p>

            <DestinationData 
            heading = "Manali"
            cName = "first-des"
            text = "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass."
            image1 = {img1}
            image2 = {img2}
            />
            <DestinationData 
            heading = "Dharamshala"
            cName = "first-des-reverse"
            text = "Dharamshala is a beautiful travel destination located in the northern Indian state of Himachal Pradesh. It is a place that offers a serene and tranquil environment to visitors. For adventure seekers, Dharamshala offers exciting activities like trekking, camping, and paragliding. The nearby mountains provide excellent opportunities for hiking and rock climbing."
            image1 = {img3}
            image2 = {img4}
            />
            <DestinationData 
            heading = "Taj Mahal, Agra"
            cName = "first-des"
            text = "Taj Mahal is one of the most popular travel destinations in India, attracting millions of tourists from all over the world every year. Located in the city of Agra in the northern state of Uttar Pradesh,The monument is especially beautiful at sunrise and sunset, when the changing light creates a magical atmosphere.Overall, the Taj Mahal is a stunning example of architectural and artistic excellence, and is a testament to the enduring love between Shah Jahan and Mumtaz Mahal."
            image1 = {img5}
            image2 = {img6}
            />
        </div>
        </>
    )
}

export default Destination