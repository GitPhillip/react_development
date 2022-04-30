import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();//calls underlying constructor method of any other classes you're extending from

    this.state = {
      monstors: [],
    }
  }

  componentDidMount() {//only happens once in components life.
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//converting to json. whatever is returned from response.json() will be in users
    .then( (users) => this.setState(()=> {
      return {monstors: users}
    }),
    () => {
      console.log(this.state);
    }) 
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monstors.map(monstor => {return <div key={monstor.name}><h1>{monstor.name}</h1></div>})
        }
      </div>
    );
  }
  
}

export default App;
