import logo from './logo.svg';
import './App.css';
import Messages from './components/message';
import MainPage from './components/link';
import Header from './components/header';
import ViewMsg from './components/viewmessage';
import Thanks from './components/thanks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path ='/' element={<MainPage/>}/>
        <Route path ='/secret/:id' element={<Messages/>}/>
     <Route path= '/allMessage'  element={<ViewMsg/>}/>
     <Route path ='/thanks' element ={<Thanks/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
