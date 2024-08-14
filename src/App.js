import { useState } from 'react'
import './App.css'
import Box from './component/Box'

const choice = {
  rock: {
    name: 'Rock',
    img: 'http://www.hallymmedialab.com/news/photo/202004/874_1627_4638.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://cdn-icons-png.flaticon.com/512/4975/4975327.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://img.freepik.com/free-vector/white-empty-paper-sheet-with-curl_1284-43065.jpg',
  },
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState('')
  const [pcResult, pcSetResult] = useState('')

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie'
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose'
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose'
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose'
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>

      <div className="main">
        <button onClick={() => play('scissors')}>Scissors</button>
        <button onClick={() => play('rock')}>Rock</button>
        <button onClick={() => play('paper')}>Paper</button>
      </div>
    </div>
  )
}

export default App
