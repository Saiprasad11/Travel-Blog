import "./Destination.css"
const DestinationData = (props) => {
    return(
        <>
            <div className={props.cName}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="des-img">
                    <img alt="img" src={props.image1}></img>
                    <img alt="img" src={props.image2}></img>
                </div>    
            </div>
        </>
    )
}

export default DestinationData