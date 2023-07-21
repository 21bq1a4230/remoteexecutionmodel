import './App.css';
import React , {Component} from 'react';
import Playground from './components/Playground/Playground';
import OutputField from './components/OutputField/OutputField';
class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }


  render(){
    return (
      <div className="app">
        <Playground/>
        <OutputField/>
      </div>
    );
  }
}

export default App;
