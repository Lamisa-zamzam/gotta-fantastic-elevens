// Style Sheet
import "./MainContainer.css";

// React Hooks
import { useState, useEffect } from "react";

// Components
import Players from "../Players/Players";
import Team from "../Team/Team";
import playersData from "../../PlayersData/PlayersData.json";

// Player Interface
import { IPlayer } from "../../App";

// Prop Interface
interface IProps {
    searchString: string;
}

const MyContainer = ({ searchString }: IProps) => {
    // Initial states
    // All the players available in the JSON file
    const [playersInfo, setPlayersInfo] = useState<IPlayer[]>([]);
    // Selected players to form a team
    const [team, setTeam] = useState<IPlayer[]>([]);
    // Id of the selected players
    const [playersId, setPlayersId] = useState<number[]>([]);

    // Fetching Data from JSON
    useEffect(() => {
        setPlayersInfo(playersData);
    }, []);

    useEffect(() => {
        setPlayersInfo(
            playersData.filter((player) =>
                player.name.toLowerCase().includes(searchString.toLowerCase())
            )
        );
    }, [searchString]);

    // Handling adding player to the team
    const addPlayer = (newPlayer: IPlayer) => {
        // If the player already exists in the team do not add him/her again
        if (playersId.find((id) => id === newPlayer.id)) {
            alert(
                "You have already had this player on your team !!! Press the 'Remove' button if you want to remove him."
            );
        } else {
            // Keep all the existing players in the team and add the new one
            setTeam([...team, newPlayer]);
            // update the players ids state
            setPlayersId([...playersId, newPlayer.id]);
        }
    };

    // Handling removing player from the team
    const removePlayer = (player: IPlayer) => {
        if (playersId.find((id) => id === player.id)) {
            // Keep all the players other than the current player in the team
            setTeam(team.filter((teamPlayer) => teamPlayer.id !== player.id));
            // Keep all the player ids other than the current player's
            setPlayersId(playersId.filter((id) => id !== player.id));
        } else
            alert(
                "You don't have this player on your team. Press the 'Add' button if to add him/her."
            );
    };

    return (
        <div className="container-div">
            {/* Team containing the selected players */}
            <Team team={team} />
            {/* All the players available */}
            <Players
                players={playersInfo}
                addPlayer={addPlayer}
                removePlayer={removePlayer}
                team={team}
            />
        </div>
    );
};

export default MyContainer;
