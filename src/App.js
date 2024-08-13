import { useState } from 'react'
import './App.css'
import Box from './component/Box'

//1. 박스 2개 (타이틀, 사진, 결과)
//2, 가위, 바위, 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 누가이겼는지 승패를 따진다.
//6. 승패 결과의 따라 테두리 색이 바뀐다.

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://img.freepik.com/free-psd/hand-drawn-rock-formation_23-2151544043.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721001600&semt=ais_user',
  },

  scissor: {
    name: 'Scissor',
    img: 'https://cdn-icons-png.flaticon.com/512/5418/5418004.png',
  },

  paper: {
    name: 'Paper',
    img: 'https://thumb.ac-illust.com/ec/ec8f375e112ebdd87223a2fc88d19235_t.jpeg',
  },
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={userSelect} />
      </div>

      <div className="main">
        <button variant="primary" onClick={() => play('scissor')}>
          가위
        </button>
        <button variant="primary" onClick={() => play('rock')}>
          바위
        </button>
        <button variant="primary" onClick={() => play('paper')}>
          보
        </button>
      </div>
    </div>
  )
}

export default App
