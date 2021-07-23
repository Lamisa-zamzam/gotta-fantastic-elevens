import { useState, useEffect } from "react";
import Players from "../Players/Players";
import Team from "../Team/Team";
import "./MainContainer.css";
import playersData from "../../PlayersData/PlayersData.json";
import { IPlayer } from "../../App";

const MyContainer = () => {
    // Fetching Data from JSON
    const [playersInfo, setPlayersInfo] = useState<IPlayer[]>([]);

    useEffect(() => {
        setPlayersInfo(playersData);
    }, []);

    // Declaring arrays for added players and their IDs
    const [team, setTeam] = useState<IPlayer[]>([]);
    const [playersId, setPlayersId] = useState<number[]>([]);

    // Handling player increase
    const handleTeam = (newPlayer: IPlayer) => {
        if (
            playersId.find(function (element) {
                return element === newPlayer.id;
            }) === undefined
        ) {
            const newTeam = [...team, newPlayer];
            setTeam(newTeam);
            const currentPlayerId = [...playersId, newPlayer.id];
            setPlayersId(currentPlayerId);
        } else
            alert(
                "You have already had this player on your team !!! Press the 'Remove' button if you want to remove him."
            );
    };

    // Handling player removing
    const removePlayer = (player: IPlayer) => {
        if (
            playersId.find(function (element) {
                return element === player.id;
            }) !== undefined
        ) {
            const newTeam = team.filter((teamPlayer) => {
                return teamPlayer.id !== player.id;
            });
            setTeam(newTeam);
            const currentPlayerId = playersId.filter((id) => {
                return id !== player.id;
            });
            setPlayersId(currentPlayerId);
        } else
            alert(
                "You don't have this player on your team. Press the 'Add' button if to add him."
            );
    };

    return (
        <div className="container-div">
            <Team team={team} />
            <Players
                players={playersInfo}
                handleTeam={handleTeam}
                removePlayer={removePlayer}
            />
        </div>
    );
};

export default MyContainer;
