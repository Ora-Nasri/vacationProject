import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import Header from "./components/Header";
import IndexPage from "./components/IndexPage/IndexPage";
import './style/App.css';

export default function App(props){

  return (
    <div >
      <Router>   
          <Header/>          
          <Routes className="App">
            <Route exact path='/' element={< IndexPage />}></Route>
            <Route exact path='/About' element={< About />}></Route>
          </Routes>
       </Router>
    </div>
  );
}