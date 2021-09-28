import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Frients from './components/Frients/Frients';
import Home from './components/Home/Home';
import Notfoun from './components/Notfount/Notfoun';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Frients></Frients>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <Notfoun></Notfoun>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
