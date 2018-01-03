import React, { Component } from 'react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';

import './css/index.css';

import PhotoContainer from './PhotoContainer'
import NavBar from './NavBar'
import SignUp from './SignUp'
import LogIn from './LogIn'
import { Loader } from 'react-loaders'
import BoardContainer from './BoardContainer'
import SearchBar from './SearchBar'
import Photo from './Photo'
import ShowPhoto from './ShowPhoto'

class App extends Component {
  constructor(){
    super();

    this.state = {
      photos: [],
      user: [],
      page_num: 1,
      loading: false,
      board: [],
      userSearchResults: [],
      photo: []
    }
  }

  componentDidMount(){
    this.getPhotos()
    this.getUser()
  }

  getPhotos(){
    this.setState({loading: true})
    fetch(`http://localhost:3000/api/v1/pictures/page/${this.state.page_num}`)
    .then(res => res.json())
    .then(res => {setTimeout(() => this.setState({photos: [...this.state.photos, ...res], loading: false}), 1000)})
  }

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader type="ball-beat" style={{textAlign: 'center', padding: '10px'}} active />
    }
  }

  getUser(){
    fetch('http://localhost:3000/api/v1/users/18')
    .then(res => res.json())
    .then(res => this.setState({user: res}))
  }

  createUser = (data) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => this.setState({
      username: res.username,
      name: res.name
    }))
  }

  handleLoadMore = () => {
    this.setState(prevState => {
        return {page_num: prevState.page_num+=1}
      }, this.getPhotos())
  }

  showBoard = (board) => {
    this.setState({board}, this.props.history.push(`/show/board/${board.name}`))
  }

  showPicture = (photo) => {
    this.setState({photo}, this.props.history.push(`/show/photo/${photo.id}`))
  }

  listUsers = (searchTerm) => {
    fetch(`http://localhost:3000/api/v1/users/search/${searchTerm}`)
      .then(res => res.json())
      .then(res => this.setState({userSearchResults: res}, this.props.history.push('/search/results')))
  }

  render() {
    // console.log(this.state)

    let searchResults = this.state.userSearchResults.map(result =>
      <div className='App' style={{padding: '30px'}}>
        <h2 className='App' style={{textAlign: 'right'}}>Search Results</h2>
        <ul key={result.name} style={{textAlign: 'right'}}>
          <NavLink to={`/show/user/${result.username}`}><li style={{fontFamily: 'Sacramento', fontSize: '36px'}}>{result.name}</li></NavLink>
        </ul>
      </div>
    )

    return (
      <div>
        <div className="navbar">
          <NavBar user={this.state.user} handleSearchClick={this.handleSearchClick}/>
        </div>
        <Switch>
          <Route exact path='/search/results' render={() => searchResults}/>
          <Route exact path='/search' render={() => <div><SearchBar listUsers={this.listUsers}/></div>} />
          <Route exact path='/' render={() => (<div className="App">
            <PhotoContainer style={{textAlign:"center"}} photos={this.state.photos} showPicture={this.showPicture} /><br />
            {this.renderLoader()}
            <button className="w3-button w3-round-xxlarge w3-white w3-hover-shadow" style={{fontFamily: 'Sacramento', fontSize: '30px', display: 'block', margin: 'auto'}} onClick={this.handleLoadMore}
              >Load More</button><br />
          </div>)}/>
          <Route exact path='/user/:username' render={() => (<div className="App">
            <BoardContainer user={this.state.user} showBoard={this.showBoard}/><br />
          </div>)}/>
          <Route exact path='/show/user/:username' render={() => (<div className="App">
            <BoardContainer user={this.state.userSearchResults[0]} showBoard={this.showBoard}/><br />
          </div>)}/>
          <Route exact path='/show/board/:name' render={() => (<div className="App">
            <PhotoContainer style={{textAlign:"center"}} photos={this.state.board.pics.pics} showPicture={this.showPicture}/><br />
          </div>)}/>
          <Route exact path='/show/photo/:id' render ={() => (<div className='photo'>
            <ShowPhoto style={{textAlign:"center", width: "100px"}} photo={this.state.photo}/>
          </div>)}/>
          <Route exact path='/signup' render={() => <SignUp createUser={this.createUser}/>}/>
          <Route exact path='/login' render={() => <LogIn />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
