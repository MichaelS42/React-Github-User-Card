import React from 'react'

const UserCard = (props) => {
    console.log(props.data)
    return(
    <div>
        <h1>{props.data.login}</h1>
        <img src={props.data.avatar_url}/>
        <h4>Followers: {props.data.followers}</h4>
        <h4>Created: {props.data.created_at}</h4>
        <h4>Following: {props.data.following}</h4>
        <h4>Github URL: {props.data.html_url}</h4>
        
    </div>
    )
}
  
export default UserCard;
