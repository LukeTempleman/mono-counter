import logo from './logo.svg';
import './App.css';
import LoginPage from './views/loginPage'


let roomId 
let players = []

let playerDetails = {
  roomId,
  players
}

function App() {
  return (
    <div class="place-content-center flex justify-center  " >
    <LoginPage></LoginPage>
    </div>
  );
}

export default App;
