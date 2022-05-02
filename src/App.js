import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  //---------------Local State------------------------
  const [searchField, setSearchField] = useState('');
  const [monstors, setMonstors] = useState([]);
  const [filteredMonstors, setFilteredMonstors] = useState(monstors);
  //---------------Local State------------------------


  //---------------On mount---------------------------
  //Only used to fetch the monstors
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => {setMonstors(users); setFilteredMonstors(users)});
  }, []);

  //Only used to update the filtered monstors once the search field changes
  useEffect(()=>{
    const newFilteredMonstors = monstors.filter(monstor =>{
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonstors(newFilteredMonstors);
  },[monstors, searchField]);
  //---------------Local State------------------------


  //---------------Onchange Handlers-------------------
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  //---------------Onchange Handlers-------------------

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

export default App;
