import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  const url = `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMatches(response.data))
      .catch((error) => console.log(error.message));
  }, [teamName, year]);

  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
