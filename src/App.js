import './App.css';
import Survey from './Contains/Survey.js';
import React, {Component} from "react";
import BoxInput from './Compenents/BoxInput';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

class App extends Component{

onInputChange(event){
  console.log(event.target.value);
  }

render(){
    return (
    <div className="App">
     <h1>Welcome</h1>

    <BoxInput searchChange={this.onInputChange}/>
    </div>
  );
}
}

export default App;
