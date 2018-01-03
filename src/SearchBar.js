import React from 'react';
import { Route, NavLink } from 'react-router-dom';

class SearchBar extends React.Component{
  constructor(){
    super();

    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    this.props.listUsers(this.state.search)
    this.setState({
      search: ''
    })
  }

  render(){
    return(
      <div className='App' style={{padding: '30px'}}>
        <h2 className='App' style={{textAlign: 'right', fontSize: '30px', fontFamily: 'Fredericka the Great'}}>Search for a User</h2>
        <form onSubmit={this.handleSubmit} style={{textAlign: 'right', fontSize: '24px', fontFamily:'Sacramento'}}>
          <input type="text" name='search' placeholder="Search.." value={this.state.search} onChange={this.handleChange}/>
          <input type="submit" style={{textAlign: 'center', paddingTop: '15px'}} className="w3-button w3-hover-pale-red w3-round-xxlarge w3-white"/>
        </form>
      </div>
    )
  }
}
export default SearchBar
