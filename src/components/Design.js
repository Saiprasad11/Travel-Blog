import './Design.css'

const Design = (props) => {
    return(
        <>
        <div className={props.cName}>
            <img alt='HeroImg' src={props.image}/>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}</a>
            </div>
        </div>
        </>
    )
}

export default Design