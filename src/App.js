import './App.css';
import {useState} from "react";

function App() {
  const [gameTitle, setGameTitle] = useState('')
  const [seachedGame , setSeachedGame] = useState([])

  const searchGame = () => {
    fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`
      ).then((response) => response.json())
      .then((data) => {
        setSeachedGame(data)
        console.log(data)
      })
  }

  return (
    <div className="App">
      <div className='searchSection'>
        <h1>Search For A Game</h1>
        <input required type="text" placeholder="Search..." onChange={(e) => {
          setGameTitle(e.target.value);
        }}/>
        <button onClick={searchGame}>Search Game</button>

        <div className='games'>
          {seachedGame.map((game , key) => {
            return (
              <div className='game' key={key}>
                {game.external}
                <img src={game.thumb} alt={game.internalName} />
                {game.cheapest}
              </div>
            )
          })}
        </div>
      </div>
      <div className='dealsSection'>
        <h1>Latest Deals</h1>
      </div>
    </div>
  );
}

export default App;
