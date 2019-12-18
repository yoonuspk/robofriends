import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SeachBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(resp => resp.json())
            .then(users => { this.setState({ robots: users }) })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => { return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) })

        return (
            <div className="tc">
                <h1 className="font-face">Robo Friends</h1>
                <SearchBox searchChanges={this.OnSearchChange} />
                <Scroll>
                    {this.state.robots.length > 0 ? (
                        <CardList robots={filteredRobots} />
                    ) : (
                            <h1>Loading</h1>
                        )}
                </Scroll>

            </div>

        );
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }
}
export default App;
