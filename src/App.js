import React from 'react';
import './App.css';
import Navigator from './Navigator';
import Display from './Display';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: true,
      selected: 2,
      showSelect: false,
      menu: [
        {
          title: "Game",
          key: 0
        },
        {
          title: "Music",
          key: 1
        },
        {
          title: "Setting",
          key: 2
        }
      ]
    }
  }

  toggleMenu = () => {
    this.setState({
      showSelect: false,
      showMenu: !this.state.showMenu
    })
  }

  changeCurrent = (towards) => {
    // javascript mod bug
    this.setState({
      selected: (((((this.state.selected) + towards) % this.state.menu.length) + this.state.menu.length) % this.state.menu.length)
    })
  }

  toggleCurrent = () => {
    this.setState({
      showSelect: !this.state.showSelect,
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return <div className="App">
      <Display menu={this.state} />
      <Navigator toggleMenu={this.toggleMenu} changeCurrent={this.changeCurrent} toggleCurrent={this.toggleCurrent}/>
    </div>
  };
}

export default App;
