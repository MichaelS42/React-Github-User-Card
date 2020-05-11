import React from 'react';
import axios from 'axios'
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    user:{},
    followers:[],
  };

  componentDidMount() {
    axios
      .get("")
      .then((res =>{

      }))

    })

  }

  axios.get("https://api.github.com/users/MichaelS42")
.then( response => {
  console.log('checking the ', response);
  allCards.appendChild(createCard(response.data));
})
.catch(error => {
  console.log('incorrect data', error)
})
const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];
  
  followersArray.forEach((item) => {
    axios.get(`https://api.github.com/users/${item}`)
    .then(response => {
      allCards.appendChild(createCard(response.data));
    })
    .catch(error => {
      console.log('incorrect data', error)
    })

  })


  render(){
    return(
      <div>
        <UserCard key={} user={} />
      </div>
    )
  }






}

export default App;
