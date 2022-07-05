import { React, useEffect, useState } from "react";
import "./HomePage.scss";
import { TeamTile } from "../components/TeamTile";
import axios from "axios";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  const url = `${process.env.REACT_APP_API_ROOT_URL}/team`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};
