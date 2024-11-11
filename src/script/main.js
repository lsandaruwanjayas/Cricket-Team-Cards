const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const cricketTeam = {
  team: "Sri Lanka",
  sport: "Cricket",
  year: 2014,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Chaminda Vaas",
    matches: 6,
  },
  players: [
    {
      name: "Dinesh Chandimal (Captain)",
      role: "Wicketkeeper Batter",
      age: "24y 118d",
      battingStyle: "Right hand Bat",
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Mahela Jayawardene",
      role: "Batter",
      age: "36y 293d",
      battingStyle: "Right hand Bat",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kusal Perera",
      role: "Wicketkeeper Batter",
      age: " 23y 211d",
      battingStyle: "Left hand Bat",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kumar Sangakkara",
      role: "Wicketkeeper Batter",
      age: "36y 140d",
      battingStyle: "Left hand Bat",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Lahiru Thirimanne",
      role: "Top order Batter",
      age: " 24y 219d",
      battingStyle: "Left hand Bat",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Tillakaratne Dilshan",
      role: "Allrounder",
      age: "37y 153d",
      battingStyle: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Angelo Mathews",
      role: "Allrounder",
      age: "26y 287d",
      battingStyle: "Right hand Bat",
      bowlingStyle: "Right arm Offbreak",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Thisara Perera",
      role: "Bowling Allrounder",
      age: "24y 347d",
      battingStyle: "Left hand Bat",
      bowlingStyle: "Right arm Medium fast",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Seekkuge Prasanna",
      role: "Allrounder",
      age: "28y 262d",
      battingStyle: "Right hand Bat",
      bowlingStyle: "Legbreak",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Chaturanga de Silva",
      role: "Allrounder",
      age: "24y 58d",
      battingStyle: "Left hand Bat",
      bowlingStyle: " Slow Left arm Orthodox",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Lasith Malinga (Vice Captain)",
      role: "Bowler",
      age: "30y 200d",
      bowlingStyle: "Right arm Fast",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rangana Herath",
      role: "Bowler",
      age: "35y 362d",
      bowlingStyle: "Slow Left arm Orthodox",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nuwan Kulasekara",
      role: "Bowler",
      age: "31y 237d",
      bowlingStyle: "Right arm Fast medium",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Suranga Lakmal",
      role: "Bowler",
      age: "27y 6d",
      bowlingStyle: "Right arm Fast medium",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ajantha Mendis",
      role: "Bowler",
      age: "29y 5d",
      bowlingStyle: "Right arm Offbreak",
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sachithra Senanayake",
      role: "Bowler",
      age: "29y 35d",
      bowlingStyle: "Right arm Offbreak",
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(cricketTeam);
const { sport, team, year, players } = cricketTeam;
const { coachName } = cricketTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({
        name,
        role,
        age,
        battingStyle,
        bowlingStyle,
        isCaptain,
        nickname,
      }) => {
        `<div class="player-card">
        <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
        <p>Role:  ${role}</p>
        <p>Age: ${age}</p>
        <p>Batting Style: ${battingStyle}</p>
        <p>Bowling Style: ${bowlingStyle}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
        `;
      }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;

    case "batters":
      setPlayerCards(players.filter((player) => player.role === "batters"));
      break;
  }
});
