import "./Players.css";

// Player Interface
import { IPlayer } from "../../App";

// Component
import Player from "../Player/Player";

// Prop Interface
interface IProps {
    players: IPlayer[];
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (player: IPlayer) => void;
    team: IPlayer[];
}

const Players = ({ players, addPlayer, removePlayer, team }: IProps) => {
    return (
        <div className="player-container">
            {players.map((player: IPlayer) => (
                <Player
                    player={player}
                    addPlayer={addPlayer}
                    removePlayer={removePlayer}
                    team={team}
                />
            ))}
        </div>
    );
};

export default Players;
