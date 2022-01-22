import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage/IndexPage";
import Reviews from './components/Reviews/Reviews';
import './style/App.css';

export default function App(props){

  return (
    <div >
      <Router>   
          <Header/>          
          <Routes className="App">
            <Route exact path='/' element={< IndexPage />}></Route>
            <Route exact path='/About' element={< About />}></Route>
            <Route exact path='/Reviews' element={< Reviews />}></Route>
          </Routes>
       </Router>
    </div>
  );
}