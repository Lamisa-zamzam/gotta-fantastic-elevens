import "./Team.css";
import { IPlayer } from "../../App";

interface IProps {
    team: IPlayer[];
}

const Team = ({ team }: IProps) => {
    const imgStyle = {
        width: "50px",
    };

    // Counting total salary
    const totalSalary = team.reduce(
        (sum, player) => sum + parseInt(player.salary),
        0
    );

    return (
        <div>
            <div className="team">
                <h1>Your Team</h1>
                <hr />
                <h3>Total Players: {team.length}</h3>
                <hr />
                <h3>Total salary: {totalSalary} USD</h3>
                <hr />
                <h4>Players Chosen</h4>
                <hr />
                {team.map((player) => {
                    // Destructuring the object "player"
                    const { id, img, name, position, salary, jerseyNumber } =
                        player;
                    return (
                        <div className="selected-players">
                            <img src={img} alt="" style={imgStyle} />
                            <div>
                                <h6 key={id}>{name}</h6>
                                <p key={id}>
                                    #{jerseyNumber}, {position}, ${salary}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Team;
