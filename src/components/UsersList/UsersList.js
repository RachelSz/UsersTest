import React from "react";
import { UsersContainer,UserContainer,User,RemoveButton,ClickCounter } from "./UsersList.style";
const UsersList = ({usersFound, handleClickUser, timesClicked, removeItem, fadeOut, isFadingOutArr}) => {
    
    return (
    <UsersContainer>
    {usersFound.map((result) => (
        <UserContainer  isFadingOut ={isFadingOutArr[result.id-1]} style={{listStyle:'none'}}  key={result.id}>
          <User onClick={(e) => handleClickUser(result.id)}> 
              {result.user}
          </User>
          <div>
            {timesClicked[result.id - 1] > 0 ?
              <ClickCounter>{timesClicked   && timesClicked[result.id-1]}</ClickCounter>
              : 
              null
            }
            <RemoveButton onClick={(e) => fadeOut(setTimeout(() => removeItem(result.id), 1000), result.id )}>x</RemoveButton>
          </div>
      </UserContainer>
      ))
  }
    </UsersContainer>
  )
}
export default UsersList;