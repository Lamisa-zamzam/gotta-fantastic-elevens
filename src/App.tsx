import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCarousel from "./Components/MyCarousel/MyCarousel";
import MyContainer from "./Components/MainContainer/MainContainer";
import MyNavbar from "./Components/MyNavbar/MyNavbar";

export interface IPlayer {
    id: number;
    name: string;
    country: string;
    salary: string;
    club: string;
    age: number;
    height: number;
    img: string;
    jerseyNumber: number;
    position: string;
    contractExpairy: string;
    trophies: number;
    matches: number;
    transferFee: string;
}

function App() {
    return (
        <div>
            {/* Navigation bar */}
            <MyNavbar />

            {/* Carousel */}
            <MyCarousel />

            {/* Main content including team and players */}
            <MyContainer />
        </div>
    );
}

export default App;
