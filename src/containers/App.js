import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots.js'; //have multiple exports and not using default exports
import './App.css';

class App extends React.Component {
    constructor() {
        super(); //in order to use this---super() is needed
        this.state = {
            // state can change but props cannot
            // live in parent component
            robots: [],
            searchfield: ''
        }
       
    }
// a function to see changes in search box -- use arrow functions for manually created functions
    onSearchChange = (event) => {
        // change the value of state of searchfield to the one entered in the input field
        this.setState( {searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //fetch is window's object
        .then(response => response.json())
        .then(users => this.setState({robots: users})); //setting the users to robots 
        
    }
    render () {
        const {robots, searchfield} = this.state; //destructuring
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            // check the robot name property with the searched name in the input field
        })
        
        //ternany if statement
        return !robots.length ?
            <h1>Loading...</h1> :
            (
            <div className='tc'>
                <h1 className ='f1'>ROBOFRIENDS</h1>
                <Searchbox searchChange = {this.onSearchChange} />
                {/* current search value entered in the search field */}
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots} /> 
                        {/* cardlist accept filteredRobots as props now */}
                        {/* {Scroll uses children--cardlist to render} */}
                    </ErrorBoundry>
                </Scroll>
            </div>
            )
        }   
}

export default App;