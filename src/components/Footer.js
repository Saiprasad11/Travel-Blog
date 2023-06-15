import "./Footer.css"

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="top">
                <div>
                    <h3>Weekend Voyage</h3>
                    <p>Explore your Favourite Destinations</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/Saiprasad.Bheemisetty">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/beingsaiprasad/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://github.com/Saiprasad11">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                    <a href="https://twitter.com/sai_bheemisetty">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <p>Saiprasad_Bheemisetty ©</p>
            </div>
        </div>
        </>
    )
}

export default Footer