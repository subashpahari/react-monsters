import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import Search from "./components/search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : '',
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }
  handleChange = e =>{
 this.setState({ searchField: e.target.value })
  }
  render() {
    const {monsters, searchField}=this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>MONSTER CARD SELECTOR</h1>
        <Search
          placeholder={'Search keyword'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
