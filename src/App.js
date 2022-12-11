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
          key: 0,
          img: "https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000"
        },
        {
          title: "Music",
          key: 1,
          img: "https://media.istockphoto.com/id/1175435360/vector/music-note-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=R7s6RR849L57bv_c7jMIFRW4H87-FjLB8sqZ08mN0OU="
        },
        {
          title: "Setting",
          key: 2,
          img: "https://www.shutterstock.com/image-vector/cogwheel-gear-mechanism-vector-settings-260nw-226269949.jpg"
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
