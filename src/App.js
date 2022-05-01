import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();//calls underlying constructor method of any other classes you're extending from

    this.state = {//initialize the state of the class
      monstors: [],
      searchField: ''
    }
  }

  componentDidMount() {//only happens once in components life.
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//converting to json. whatever is returned from response.json() will be in users
    .then( (users) => 
      this.setState(
        ()=> {
        return {monstors: users}
        }),
        () => {
          console.log(this.state);
        }
      ) 
  }

  onSearchChange = (e) => {
    console.log(e)
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(
      ()=> {
        return {
          searchField
        }
      },
      () => {
        console.log({endingArray: this.state.monstors})
      }
    );
  }

  render(){

    const {monstors, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonstors = monstors.filter(monstor => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search monstors'
          onChange={onSearchChange}/>
        {
          filteredMonstors.map(monstor => {
            return (
              <div key={monstor.name}>
                <h1>{monstor.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
  
}

export default App;
