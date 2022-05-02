import { Component } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
      () => {}
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
        <h1 className='app-title'>Rolodex Monstors</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder={'Search monsters'} 
          className={'monstors-search-box'}
        />
        <CardList monstors={filteredMonstors}/>
      </div>
    );
  }
  
}

export default App;
