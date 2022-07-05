import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

const MatchSmallCard = (props) => {
  const otherTeam =
    props.match.team1 === props.teamName
      ? props.match.team2
      : props.match.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = props.teamName === props.match.matchWinner;

  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="vs">vs</span>
      <h1>
        <Link to={otherTeamRoute}>{otherTeam}</Link>
      </h1>
      <p className="match-result">
        {props.match.matchWinner} won by {props.match.resultMargin}{" "}
        {props.match.result}
      </p>
    </div>
  );
};

export default MatchSmallCard;
