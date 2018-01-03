import React from 'react';

class SignUp extends React.Component{
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.findUser(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  render(){
    return(
      <div style={{padding: '30px'}}>
        <h2 style={{textAlign: 'right', fontSize: '40px', fontFamily: 'Fredericka the Great'}}>Log In</h2>
        <form onSubmit={this.handleSubmit} style={{textAlign: 'right', fontSize: '24px', fontFamily:'Sacramento'}}>
          Email <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br />
          Password <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" className="w3-button w3-round-xxlarge w3-white w3-hover-shadow"/>
        </form>
      </div>
    )
  }
}
export default SignUp
