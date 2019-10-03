import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: true,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  }

  render() {
    return (
        <div className="App">
          <Todos todos={this.state.todos}/>
        </div>
    );
  }
}

export default App;
