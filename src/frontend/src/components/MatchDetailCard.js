import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

const MatchDetailCard = (props) => {
  const otherTeam =
    props.match.team1 === props.teamName
      ? props.match.team2
      : props.match.team1;

  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = props.teamName === props.match.matchWinner;

  return (
    <div
      className={
        isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"
      }
    >
      <div>
        <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
        <h2 className="match-date">{props.match.date}</h2>
        <h3 className="match-venue">at {props.match.venue}</h3>
        <h3 className="match-result">
          {props.match.matchWinner} won by {props.match.resultMargin}{" "}
          {props.match.result}
        </h3>
      </div>
      <div className="additional-detail">
        <h3>First Innings</h3>
        <p>{props.match.team1}</p>
        <h3>Second Innings</h3>
        <p>{props.match.team2}</p>
        <h3>Man of the match</h3>
        <p>{props.match.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {props.match.umpire1},{props.match.umpire2}
        </p>
      </div>
    </div>
  );
};

export default MatchDetailCard;
