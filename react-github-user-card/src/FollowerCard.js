import React from 'react'


const FollowerCard = (props) => {
    console.log(props.user)
     
    return(
    <div>
        <h1>{props.user.login}</h1>
        <img src={props.user.avatar_url}/>
    </div>
    )
}
  
export default FollowerCard;