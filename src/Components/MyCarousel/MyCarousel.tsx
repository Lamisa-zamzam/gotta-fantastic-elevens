import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";

const MyCarousel = () => {
    return (
        <div>
            <Carousel>
                {/* First Carousel Item */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://media.istockphoto.com/photos/major-european-soccer-clubs-picture-id870009194"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="sliderText">
                            <h3>MAKE AN UNBEATABLE TEAM !!</h3>
                            <p>
                                WE ARE HERE TO HELP YOU WITH THE GREATEST
                                PLAYERS OF ALL TIME !!! GET SOME MONEY OUT OF
                                THE POCKET AND BUY SPECTACULAR PLAYERS !!!
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Second Carousel Item */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://cdn.inquisitr.com/wp-content/uploads/2019/03/FC-Barcelona-team-picture.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="sliderText">
                            <h3>MAKE YOUR DREAM 11 !!!</h3>
                            <p>
                                THOUSANDS OF FORWARDS, MIDFIELDERS, DEFENDERS
                                AND GOALKEEPERS AVAILABLE !!! NEVER GET OUT OF
                                STOCK!!
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Third Carousel Item */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="http://2.bp.blogspot.com/-HVcdYZg5SX8/UhwU06vXgYI/AAAAAAAAFFI/GUqXjyCXYVA/w1200-h630-p-nu/ClubMap.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="sliderText">
                            <h3>FROM EVERY COUNTRY, FOR EVERY CLUB!!</h3>
                            <p>
                                YOU NEVER NEED TO BE A RENOWNED CLUB, OUR
                                PLAYERS RESPECT EACH ONE. THEY NEVER RUN AFTER
                                MONEY. GET STARTED TODAY!!!!
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MyCarousel;
