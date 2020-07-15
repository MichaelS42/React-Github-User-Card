import React from 'react'


const FollowerCard = (props) => {
    console.log(props.user)
    return(
    <follower>
        <h1>{props.user.login}</h1>
        <img src={props.user.avatar_url}/>
        <h4>Github URL: {props.user.html_url}</h4>
    </follower>
    )
}
  
export default FollowerCard;