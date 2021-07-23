import "./Players.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IPlayer } from "../../App";
import { Button } from "react-bootstrap";

interface IProps {
    players: IPlayer[];
    handleTeam: (newPlayer: IPlayer) => void;
    removePlayer: (player: IPlayer) => void;
}

const Players = ({ players, handleTeam, removePlayer }: IProps) => {
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
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <h1>{name}</h1>
                            <div>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        handleTeam(player);
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
                            </div>
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
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Players;
