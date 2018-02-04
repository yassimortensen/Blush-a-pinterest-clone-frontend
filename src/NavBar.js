import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <ul>
        <li className="w3-round-xxlarge" style={{margin: '0', padding: '0', textAlign: 'left', width: '14%', fontSize: '40px', fontFamily: 'Fredericka the Great'}}><NavLink className="blush" style={{textDecoration: 'none', textAlign: 'center', textDecorationColor: '#FEDDE8'}} to='/'>Blush</NavLink></li>
        <div style={{width: '72%', textAlign: 'center', display: 'inline-block', margin: '0', padding: '0'}}>
          <li><NavLink to={`/user/${this.props.user.username}`}><i className="material-icons w3-button w3-round-large">home</i></NavLink></li>
          <li><NavLink to='/search'><i className="material-icons w3-button w3-round-large">search</i></NavLink></li>
          <li><i className="material-icons w3-button w3-round-large">more_horiz</i></li>
          <li><i className="material-icons w3-button w3-round-large">expand_more</i></li>
        </div>
        <div style={{margin: '0', padding: '0', width: '14%', textAlign: 'right', display: 'inline-block'}}>
          <li className="w3-hover-pale-red w3-round-xxlarge w3-button"><NavLink style={{textDecoration: 'none'}} to='/signup'>SignUp</NavLink>
          </li>
          <li className="w3-hover-pale-red w3-round-xxlarge w3-button"><NavLink style={{textDecoration: 'none', marginRight: '10px'}} to='/login'>Login</NavLink></li>
        </div>
      </ul>
    )
  }
}
export default NavBar
