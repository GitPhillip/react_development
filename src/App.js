import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();//calls underlying constructor method of any other classes you're extending from

    this.state = {
      name: {firstName: 'Phillip', lastName: 'Ndlovu'},
      company: 'N-ivory'
    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}. I work at {this.state.company}
          </p>
          <button onClick={()=> { 
            this.setState(
              (state, props) => {
                return {
                  name: {firstName: 'Zuzimpilo', lastName: 'Ndlovu ZZ'}
                }
              },
              () => {
                console.log(this.state);
              }
            );
          }}>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
