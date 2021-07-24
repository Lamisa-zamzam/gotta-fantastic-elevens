// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

// React Bootstrap
import { Button } from "react-bootstrap";

// Player Interface
import { IPlayer } from "../../App";
import { useEffect, useState } from "react";

// Prop Interface
interface IProps {
    player: IPlayer;
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (player: IPlayer) => void;
    team: IPlayer[];
}

const Player = ({ player, addPlayer, removePlayer, team }: IProps) => {
    const [addDisabled, setAddDisabled] = useState(false);
    const [removeDisabled, setRemoveDisabled] = useState(false);
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

    useEffect(() => {
        setAddDisabled(team.find((player) => player.id === id) ? true : false);
        setRemoveDisabled(
            team.find((player) => player.id === id) ? false : true
        );
    }, [id, team]);

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
                    disabled={addDisabled}
                >
                    {/* Font Awesome Icon*/}
                    <FontAwesomeIcon icon={faPlus} /> Add
                </Button>
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
