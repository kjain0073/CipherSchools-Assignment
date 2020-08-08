import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import cities from '../cities.json';

class Dashboard extends Component{
  constructor(){
    super()
    this.state = {
      cities: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    this.setState({cities: cities});
  }

  onSearchChange=(event)=> {
    this.setState({searchfield: event.target.value})    
    
  }

  render() {
    const { cities,searchfield } =this.state;
    const filteredCities=cities.filter(city =>{
      return (city.name.toLowerCase().includes(searchfield.toLowerCase()) || city.state.toLowerCase().includes(searchfield.toLowerCase()) );
    })
    return !cities.length ?
      <h1>Loading</h1>:
      (<div>
        <div className='tc'>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredCities} />
          </Scroll>
        </div>
      </div>  
    );
    }    
}
export default Dashboard;