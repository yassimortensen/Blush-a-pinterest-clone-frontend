import React from 'react';

class SignUp extends React.Component{
  constructor(){
    super();

    this.state = {
      name: '',
      username: '',
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
    this.props.createUser(this.state)
    this.setState({
      name: '',
      username: '',
      email: '',
      password: ''
    })
  }

  render(){
    return(
      <div style={{padding: '30px'}}>
        <h2 style={{textAlign: 'right', fontSize: '40px', fontFamily: 'Fredericka the Great'}}>Create an Account</h2>
        <form onSubmit={this.handleSubmit} style={{textAlign: 'right', fontSize: '24px', fontFamily:'Sacramento'}}>
          First Name <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
          Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
          Email <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br />
          Password <input type="text" name="password" value={this.state.password} onChange={this.handleChange} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default SignUp
