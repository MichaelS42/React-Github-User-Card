import React from 'react'

const UserCard = (props) => {
    console.log(props.data)
    return(
    <div>
        <h1>{props.data.login}</h1>
        <img src={props.data.avatar_url}/>
    </div>
    )
}
  
export default UserCard;
