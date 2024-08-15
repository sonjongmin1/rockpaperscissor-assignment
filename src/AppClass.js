import { Component } from 'react'
import './App.css'
import BoxClass from './component/BoxClass'

const choice = {
  rock: {
    name: 'Rock',
    img: require('./image/rock.png'),
  },
  scissors: {
    name: 'Scissors',
    img: require('./image/scissor.png'),
  },
  paper: {
    name: 'Paper',
    img: require('./image/paper.png'),
  },
}

export default class AppClass extends Component {
  constructor() {
    super()
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    }
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice()
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    })
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }
  judgement = (user, computer) => {
    if (user.name == computer.name) {
      return 'tie'
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose'
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose'
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose'
  }

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    )
  }
}
