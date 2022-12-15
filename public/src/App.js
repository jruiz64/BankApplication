import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import CreateAccount from './Components/CreateAccount';
import Login from './Components/Login';
import UserContext from './Components/UserContext';
import Home from './Components/Home';
import Deposit from './Components/Deposit';
import AllData from './Components/AllData';
import Withdraw from './Components/Withdraw';
import Balance from './Components/Balance';

function App() {
  
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name: '', email: '', password: '', balance: 0}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/CreateAccount/" element={<CreateAccount/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/balance/" element={<Balance/>} />
            <Route path="/alldata/" element={<AllData/>} />
            </Routes>
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
 export default App;