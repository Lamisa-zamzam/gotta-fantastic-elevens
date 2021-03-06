// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import MyCarousel from "./Components/MyCarousel/MyCarousel";
import MyContainer from "./Components/MainContainer/MainContainer";
import { useState } from "react";

// Player Interface to be used from different components
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

const App = () => {
    // Search string
    const [searchString, setSearchString] = useState("");

    return (
        <>
            {/* Navigation bar */}
            <MyNavbar searchString={searchString} setSearchString={setSearchString}/>

            {/* Carousel */}
            <MyCarousel />

            {/* Main content including the team and players */}
            <MyContainer searchString={searchString}/>
        </>
    );
};

export default App;
