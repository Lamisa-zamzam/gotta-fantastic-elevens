// React
import { useEffect, useState } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

// React Bootstrap
import { Button } from "react-bootstrap";

// Player Interface
import { IPlayer } from "../../App";

// Prop Interface
interface IProps {
    player: IPlayer;
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (player: IPlayer) => void;
    team: IPlayer[];
}

const Player = ({ player, addPlayer, removePlayer, team }: IProps) => {
    // If the ADD button is disabled
    const [addDisabled, setAddDisabled] = useState(false);
    // If the REMOVE button is disabled
    const [removeDisabled, setRemoveDisabled] = useState(false);
    // Destructuring the object - player
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

    // Setting states on component mount
    useEffect(() => {
        // If we find the current player in the team, the add button
        // would be disabled
        setAddDisabled(team.find((player) => player.id === id) ? true : false);
        // If we don't find the current player in the team, the
        // remove button would be disabled
        setRemoveDisabled(
            team.find((player) => player.id === id) ? false : true
        );
    }, [id, team]);

    return (
        <div key={id} className="player">
            {/* Players Information */}
            <img src={img} alt={name} />
            {/* We need this fragment to display it as a grid */}
            <>
                <h1>{name}</h1>
                {/* Add player button */}
                <Button
                    variant="primary"
                    onClick={() => {
                        addPlayer(player);
                    }}
                    disabled={addDisabled}
                >
                    {/* Font Awesome Icon*/}
                    <FontAwesomeIcon icon={faPlus} /> Add
                </Button>
                {/* Remove player button */}
                <Button
                    variant="primary"
                    onClick={() => {
                        removePlayer(player);
                    }}
                    disabled={removeDisabled}
                >
                    {/* Font Awesome Icon*/}
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
};

export default Player;
