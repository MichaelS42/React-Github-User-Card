import React from 'react';
import axios from 'axios'
import './App.css';
// import { render } from 'react-dom';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
    user:{},
    followers:[],
    userInfo: "",
  };

  }

  componentDidMount() {
    axios.get("https://api.github.com/users/MichaelS42")
    .then( response => {
    console.log('checking the ', response);
    this.setState({ user: response.data })
    return response.data.followers_url
    })
    .then( response =>{
      axios.get(response)
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          followers: res.data
        })
      })

    }

    )
    .catch(error => {
    console.log('incorrect data', error)
  })}

   
  


  render(){
    return(
      <div>
        <UserCard data={this.state.user}/>
        {this.state.followers.map(follower => <FollowerCard user={follower} />)}
        
      </div>
    );
  }






}

export default App;
