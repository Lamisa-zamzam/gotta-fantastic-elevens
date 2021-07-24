import "./Players.css";

// Player Interface
import { IPlayer } from "../../App";

// React Bootstrap
import { Button } from "react-bootstrap";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

// Prop Interface
interface IProps {
    players: IPlayer[];
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (player: IPlayer) => void;
}

const Players = ({ players, addPlayer, removePlayer }: IProps) => {
    return (
        <div className="player-container">
            {players.map((player: IPlayer) => {
                // destructuring the object "player"
                const {
                    id,
                    img,
                    name,
                    club,
                    salary,
                    country,
                    age,
                    height,
                    jerseyNumber,
                    position,
                    contractExpairy,
                    trophies,
                    matches,
                } = player;
                return (
                    <div key={id} className="player">
                        {/* Players Information */}
                        <img src={img} alt={name} />
                        <>
                            <h1>{name}</h1>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    addPlayer(player);
                                }}
                            >
                                {/* Font Awesome Icon: 2 of 3 */}
                                <FontAwesomeIcon icon={faPlus} /> Add
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    removePlayer(player);
                                }}
                            >
                                {/* Font Awesome Icon: 2 of 3*/}
                                <FontAwesomeIcon icon={faTimes} /> Remove
                            </Button>
                            <h4>Current Club: {club}</h4>
                            <h4>Salary per Year: {salary} USD</h4>
                            <h4>Country: {country}</h4>
                            <h4>Age: {age}</h4>
                            <h4>Height: {height} meters</h4>
                            <h4>Jersey Number: {jerseyNumber}</h4>
                            <h4>Position: {position}</h4>
                            <h4>Contract Expires: {contractExpairy}</h4>
                            <h4>
                                Trophies: {trophies}, Matches: {matches}
                            </h4>
                        </>
                    </div>
                );
            })}
        </div>
    );
};

export default Players;
